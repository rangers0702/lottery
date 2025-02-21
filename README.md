# Lottery Game Smart Contract

This is a simple Lottery smart contract implemented in Solidity. It allows participants to enter a lottery by sending a fixed amount of ETH and picks a random winner to receive the total prize pool.

## Features

- **Lottery Entry**: Participants can enter the lottery by sending 0.1 ETH to the contract.
- **Random Winner Selection**: A random winner is selected from the participants when the `pickWinner` function is called.
- **Prize Pool**: The total prize pool (ETH collected from participants) is transferred to the winner upon selection.
- **Reset After Winner**: The list of participants is cleared after a winner is selected, and the game is ready for a new round.

## Smart Contract Address

The lottery contract is deployed on the EduChain network at the following address:


## How to Use

### 1. Enter the Lottery
To enter the lottery, simply send exactly **0.1 ETH** to the contract address. Use the `enter()` function to participate.

### 2. Pick a Winner
The owner (or any authorized address) can call the `pickWinner()` function to randomly select a winner. The winner will receive the entire prize pool of ETH.

### 3. View Participants
You can view the list of participants at any time by calling the `getParticipants()` function.

## Example Functions

- **enter()** - Send 0.1 ETH to the contract to enter the lottery.
- **pickWinner()** - Select and reward the random winner of the lottery.
- **getParticipants()** - Retrieve the list of participants currently in the lottery.

## Requirements

- **Solidity**: Version 0.8.0 or above.
- **EduChain Network**: This contract is deployed on EduChain.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
