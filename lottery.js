// Connect to the Ethereum network using Web3.js
let web3;
let lotteryContract;
const lotteryAddress = "0x0f2b85eCb07711064d879678cA5C25C407F92Fc5"; // Your deployed contract addres
const lotteryABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "getParticipants",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "pickWinner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

window.addEventListener("load", async () => {
    if (typeof window.ethereum !== "undefined") {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        lotteryContract = new web3.eth.Contract(lotteryABI, lotteryAddress);
        getParticipants();
    } else {
        document.getElementById("status").textContent = "Please install MetaMask to use this DApp.";
    }

    // Enter the lottery
    document.getElementById("enterLotteryBtn").addEventListener("click", async () => {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        try {
            await lotteryContract.methods.enter().send({ from: account, value: web3.utils.toWei("0.1", "ether") });
            alert("You have entered the lottery!");
            getParticipants();
        } catch (error) {
            console.error(error);
        }
    });

    // Pick a winner
    document.getElementById("pickWinnerBtn").addEventListener("click", async () => {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        try {
            await lotteryContract.methods.pickWinner().send({ from: account });
            alert("Winner picked!");
            getParticipants();
        } catch (error) {
            console.error(error);
        }
    });
});

// Get participants from the contract
async function getParticipants() {
    try {
        const participants = await lotteryContract.methods.getParticipants().call();
        const participantsList = document.getElementById("participantsList");
        participantsList.innerHTML = "";
        participants.forEach(participant => {
            const listItem = document.createElement("li");
            listItem.textContent = participant;
            participantsList.appendChild(listItem);
        });
    } catch (error) {
        console.error(error);
    }
}
