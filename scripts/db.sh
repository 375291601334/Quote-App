#!/bin/bash

currentDirectory=$( cd $(dirname "${0}") && pwd)
usersDB=${currentDirectory%scripts}data/users.db

function getUserInput() {
  local field
  local isValid=0
  while (( $isValid == 0 )); do
    read -p "Type a $1: " field
    if [[ $field =~ ^[A-Za-z_]+$ ]]; then
      isValid=1
    else
      echo "$(tput setaf 1)Only Latin letters are allowed! Try again$(tput sgr 0)" >&2
    fi
  done
  echo "$field"
}


function checkFileExistence {
  if [[ ! -f $usersDB ]]; then
    local ans
    local isValid=0
    while [[ $isValid = 0 ]]; do
      read -p "File users.db wasn't found. Do you want to create it? [Yes, No]: " ans
      case $ans in
        yes|YES|Yes|y|Y)  mkdir -p $(dirname "$usersDB")
                          touch $usersDB
                          echo "$(tput setaf 2)File users.db was creted!$(tput sgr 0)"
                          isValid=1
                          ;;
        no|NO|No|n|N   )  echo "$(tput setaf 3)File will not be created, command is finished!$(tput sgr 0)"
                          exit 1
                          ;;
        *              )  echo "$(tput setaf 1)Answer is invalid! Please type only yes or no!$(tput sgr 0)" >&2
      esac
    done
  fi
}

function list {
  checkFileExistence

  declare -a list
  local i
  mapfile list < $usersDB

  if [[ "$1" = inverse ]]; then
    echo -e "\nInversed users list:"
    i=${#list[@]}
    while (( $i > 0 )); do
      echo "$i. ${list[i-1]}"
      ((--i))
    done
  else
    echo -e "\nUsers list:"
    i=0
    while (( $i < ${#list[@]} )); do
      echo -n "$((i+1)). ${list[i]}"
      ((++i))
    done
    echo -e "\n"
  fi
}

function find {
  checkFileExistence

  local usr="$(getUserInput username)"

  local results=$(grep -wP $usr, $usersDB)

  if [[ $? = 0 ]]; then
    echo -n "$(tput setaf 2)Results:"
    echo -n $results | sed "s/$usr/\n&/g"
    echo "$(tput setaf 0)"
  else
    echo "$(tput setaf 3)User not found!$(tput setaf 0)"
  fi
}

function add {
  checkFileExistence

  local usr
  local role
  usr="$(getUserInput username)"
  role="$(getUserInput role)"

  echo "$usr, $role" >> $usersDB
  echo "$(tput setaf 2)Done! $usr, $role was added to users.db$(tput setaf 0)"
}

function restore {
  checkFileExistence

  local backupDB=$(ls -t ./data/*-users.db.backup 2>/dev/null | head -1)

  if [[ ! -z $backupDB ]]; then
    cp -f $backupDB $usersDB
    echo "$(tput setaf 2)Database restored from $backupDB$(tput setaf 0)"
  else
    echo "$(tput setaf 1)No backup file found!$(tput setaf 0)"
  fi
}

function backup {
  checkFileExistence

  local backupDB=$(date +"%d-%m-%y-%H-%M-%S")-users.db.backup
  cp $usersDB ./data/$backupDB
  echo "$(tput setaf 2)Done! $backupDB was created$(tput setaf 0)"
}

function help() {
  echo "$(tput setaf 3)
                     All avalible script commands:
  --------------------------------------------------------------------------
  help    - Prints instructions how to use this script with description of
            all available commands.

  list    - Prints contents of users.db in format: N. username, role.
            Accepts an additional optional parameter inverse which allows
            to get result in an opposite order - from bottom to top.

  find    - Prompts user to type a username(Latin letters only), then prints
            username and role if such exists in users.db. If there is no user
            with selected username, script must print: “User not found”. If
            there is more than one user with such username, print all found
            entries.

  add     - Adds a new line to the users.db. Prompt user to type a username
            and role (Latin letters only).

  backup  - Creates a new file, named %date%-users.db.backup which is a copy
            of current users.db.

  restore - Takes last created backup file and replaces users.db with it. If
            there are no backups - print: “No backup file found”
  $(tput setaf 0)"
}

"$@"

if [[ $# -eq 0 ]]; then
  help
fi
