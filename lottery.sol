# lottery
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleLottery {
    address[] public participants;
    address public winner;

    // Function to enter the lottery
    function enter() public payable {
        require(msg.value == 0.1 ether, "Entry fee is 0.1 ETH");
        participants.push(msg.sender);
    }

    // Function to pick a random winner
    function pickWinner() public {
        require(participants.length > 0, "No participants in the lottery");
        
        // Random index to pick winner
        uint256 index = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, participants))) % participants.length;
        winner = participants[index];

        // Transfer the prize to the winner
        payable(winner).transfer(address(this).balance);

        // Reset participants for the next round
        delete participants;
    }

    // Function to get current participants
    function getParticipants() public view returns (address[] memory) {
        return participants;
    }
}
