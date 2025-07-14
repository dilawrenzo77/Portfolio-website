import { v2 as cloudinary } from "cloudinary";



cloudinary.config({
		cloud_name: "di2hze8zk"
	})

const eth = cloudinary.url('guerrillabuzz-8GXpptuzqBw-unsplash_ad98l0');

const web3Projects = [
	{
    projectId: 1,   
	projectName: "Taxed ERC20 Token Contract",
	projectDescription: "An ERC20 token that is taxed",
    projectDetails: "This contract also Utilizes OpenZepellin's ERC20 token protocol and creates an ERC20 token with a variety of functionalities including a special tax set only by the deployer",
	keyFeatures: ["Owner Modifier: The token has an onlyOwner modifier for minting purposes","Initial Token Supply: 1 million tokens are initially minted to the owner","Tax allocation: The tax fee is set by the Owner of the contract","Tax Transfer: This functionality transfers tokens to an account, a specific fee(Tax) is charged by the owner of the contract"],
	projectThumbnail: `${eth}`,
	projectTools: ["Solidity", "Remix"],
	projectGitHub: "https://github.com/dilawrenzo77/Web3-Solidity-Smart-Contract/blob/main/contracts/erc20token2.sol",
	transactionHash: "",
    },
    {
    projectId: 2,   
	projectName: "ERC20 Token",
	projectDescription: "A simple smart contract that deploys a simple ERC20 Token",
    projectDetails: " This contract Utilizes OpenZepellin's ERC20 token protocol and creates an ERC20 token with a variaty of functionalities",
	keyFeatures: ["Owner Modifier: The token has an onlyOwner modifier for minting purposes ","Initial Token Supply: 1 million tokens are initially minted to the owner","Token Transfer: the function allows for the transfer of funds by the owner of the token","Special Transfer Function: allows for the transfer of tokens(20 bonus token) to a special account upon provision of a special PROMOCODE","Token Balance: The token balance is displayed","Events: Events are emitted for the various functions"],
	projectThumbnail: `${eth}`,
	projectTools: ["Solidity", "Remix"],
	projectGitHub: "https://github.com/dilawrenzo77/Web3-Solidity-Smart-Contract/blob/main/contracts/erc20token.sol",
	transactionHash: "",
    },
	{
	projectId: 3,   
	projectName: "Funds Transfer Smart Contract",
	projectDescription: "A deposit and transfer smart contract",
    projectDetails: "This is a simple yet functional smart contract that has certain features that enable the transfer and reception of funds.",
	keyFeatures: ["Funds Reception: The smart contract has a PAYABLE modifier that allows for the reception of funds","Balance: It has a function that displays the current smart contract balance","Transfer: The contract has a transfer function that lets the funds in the smart contract be transfered from the contract to both the deployers account or another different account"],
	projectThumbnail: `${eth}`,
	projectTools: ["Solidity","Remix"],
	projectGitHub: "https://github.com/dilawrenzo77/Web3-Solidity-Smart-Contract/blob/main/contracts/sendMoney.sol",
	transactionHash: "",
    }

];
export default web3Projects;