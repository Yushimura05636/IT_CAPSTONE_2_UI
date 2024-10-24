#!/bin/bash

# Custom script to setup Node.js version 20 using NVM

# Function to setup Node.js v20
setup_node() {
    # Check if NVM is installed
    if [ -d "$HOME/.nvm" ]; then
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Load NVM
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Load NVM bash completion

        # Check if Node.js version 20 is installed, if not, install it
        if ! nvm ls | grep -q "v20"; then
            echo "Installing Node.js version 20..."
            nvm install 20
        fi
        # Set default Node.js version to 20
        nvm alias default 20
        echo "Node.js version 20 is now set as the default version."
    else
        echo "NVM is not installed. Please install NVM first."
    fi
}

# Execute the setup function
setup_node
