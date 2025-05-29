// Contract addresses and ABIs
const contracts = {
    PLSN: {
        address: "0xf651e3978f1f6ec38a6da6014caa6aa07fbae453",
        abi: [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "tokenName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "tokenSymbol",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "tokenDecimals",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "tokenTotalSupply",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountPLS",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountBOG",
                "type": "uint256"
            }
        ],
        "name": "AutoLiquify",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "_maxTxAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_maxWalletToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "approveMax",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "authorize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "autoLiquidityReceiver",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "blacklistMode",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buyCooldownEnabled",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountPercentage",
                "type": "uint256"
            }
        ],
        "name": "clearStuckBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountPercentage",
                "type": "uint256"
            }
        ],
        "name": "clearStuckBalance_sender",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            },
            {
                "internalType": "uint8",
                "name": "_interval",
                "type": "uint8"
            }
        ],
        "name": "cooldownEnabled",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cooldownTimerInterval",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "devFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "devFeeReceiver",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distributor",
        "outputs": [
            {
                "internalType": "contract DividendDistributor",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }
        ],
        "name": "enable_blacklist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeDenominator",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCirculatingSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "accuracy",
                "type": "uint256"
            }
        ],
        "name": "getLiquidityBacking",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "isAuthorized",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isBlacklisted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "target",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "accuracy",
                "type": "uint256"
            }
        ],
        "name": "isOverLiquified",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isOwner",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "liquidityFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "addresses",
                "type": "address[]"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "manage_blacklist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketingFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketingFeeReceiver",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pair",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "reflectionFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "router",
        "outputs": [
            {
                "internalType": "contract IDEXRouter",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sellMultiplier",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_minPeriod",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_minDistribution",
                "type": "uint256"
            }
        ],
        "name": "setDistributionCriteria",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gas",
                "type": "uint256"
            }
        ],
        "name": "setDistributorSettings",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_autoLiquidityReceiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_marketingFeeReceiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_devFeeReceiver",
                "type": "address"
            }
        ],
        "name": "setFeeReceivers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_liquidityFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_reflectionFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_marketingFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_devFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_feeDenominator",
                "type": "uint256"
            }
        ],
        "name": "setFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "exempt",
                "type": "bool"
            }
        ],
        "name": "setIsDividendExempt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "exempt",
                "type": "bool"
            }
        ],
        "name": "setIsFeeExempt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "exempt",
                "type": "bool"
            }
        ],
        "name": "setIsTxLimitExempt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "maxTXPercentage_base1000",
                "type": "uint256"
            }
        ],
        "name": "setMaxTxPercent_base1000",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "maxWallPercent_base1000",
                "type": "uint256"
            }
        ],
        "name": "setMaxWalletPercent_base1000",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_enabled",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "setSwapBackSettings",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_target",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_denominator",
                "type": "uint256"
            }
        ],
        "name": "setTargetLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "setTxLimit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "Multiplier",
                "type": "uint256"
            }
        ],
        "name": "set_sell_multiplier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapEnabled",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapThreshold",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tradingOpen",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }
        ],
        "name": "tradingStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "adr",
                "type": "address"
            }
        ],
        "name": "unauthorize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]
    },
    Distributor: {
        address: "0xd097429a1188b79baad4453333466a38a75e4a97",
        abi: [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_router",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "claimDividend",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dividendsPerShare",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dividendsPerShareAccuracyFactor",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "shareholder",
                "type": "address"
            }
        ],
        "name": "getUnpaidEarnings",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minDistribution",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minPeriod",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gas",
                "type": "uint256"
            }
        ],
        "name": "process",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_minPeriod",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_minDistribution",
                "type": "uint256"
            }
        ],
        "name": "setDistributionCriteria",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "shareholder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "setShare",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "shares",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalExcluded",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalRealised",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalDistributed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalDividends",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalShares",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
    },
    WPLSN: {
        address: "0xb6c636eD29FE9fFc2A7554366e748791B1BA98c0",
        abi: [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_plsnAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountPLSN",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountWPLSN",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Recover",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountWPLSN",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountPLSN",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "PLSN",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mintExcessWPLSN",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ownerAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "recoverERC20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
    }
};

// Dead addresses to check balance
const deadAddresses = [
    "0x0000000000000000000000000000000000000369",
    "0x0000000000000000000000000000000000000000",
    "0x000000000000000000000000000000000000dEaD"
];

// Initialize Web3
let web3;
let accounts = [];
let plsnContract;
let distributorContract;
let wplsnContract;

// Initialize the application
async function init() {
    // Check if Web3 is injected (MetaMask)
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateAccountDisplay(accounts[0]);
            loadAccountData(accounts[0]);
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        // Fallback to PulseChain RPC if no Web3 provider
        web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.pulsechain.com"));
        console.log("No Web3 provider detected, using PulseChain RPC");
    }

    // Initialize contracts
    plsnContract = new web3.eth.Contract(contracts.PLSN.abi, contracts.PLSN.address);
    distributorContract = new web3.eth.Contract(contracts.Distributor.abi, contracts.Distributor.address);
    wplsnContract = new web3.eth.Contract(contracts.WPLSN.abi, contracts.WPLSN.address);

    // Load contract data
    loadPLSNData();
    loadDistributorData();

    // Set up event listeners
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);
    
    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', copyToClipboard);
    });

    // Token action buttons
    document.getElementById('approve-btn').addEventListener('click', approveTokens);
    document.getElementById('approve-max-btn').addEventListener('click', approveMaxTokens);
    document.getElementById('transfer-btn').addEventListener('click', transferTokens);
    document.getElementById('transfer-from-btn').addEventListener('click', transferFromTokens);

    // Handle account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            if (accounts.length > 0) {
                updateAccountDisplay(accounts[0]);
                loadAccountData(accounts[0]);
            } else {
                updateAccountDisplay(null);
                document.getElementById('account-section').classList.add('hidden');
                document.getElementById('token-actions').classList.add('hidden');
            }
        });
    }
}

// Connect wallet handler
async function connectWallet() {
    if (window.ethereum) {
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateAccountDisplay(accounts[0]);
            loadAccountData(accounts[0]);
        } catch (error) {
            console.error("Error connecting wallet:", error);
            Swal.fire({
                icon: 'error',
                title: 'Connection Error',
                text: 'Failed to connect wallet. Please try again.'
            });
        }
    } else {
        alert("Please install MetaMask or another Web3 provider to connect your wallet.");
    }
}

// Update account display
function updateAccountDisplay(account) {
    const accountDisplay = document.getElementById('account-address');
    const accountSection = document.getElementById('account-section');
    const tokenActions = document.getElementById('token-actions');
    
    if (account) {
        accountDisplay.textContent = `${account.substring(0, 6)}...${account.substring(38)}`;
        accountDisplay.title = account;
        accountSection.classList.remove('hidden');
        tokenActions.classList.remove('hidden');
    } else {
        accountDisplay.textContent = "Not connected";
        accountSection.classList.add('hidden');
        tokenActions.classList.add('hidden');
    }
}

// Copy to clipboard function
function copyToClipboard(e) {
    const targetId = e.currentTarget.getAttribute('data-target');
    const textToCopy = document.getElementById(targetId).textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalIcon = e.currentTarget.innerHTML;
        e.currentTarget.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            e.currentTarget.innerHTML = originalIcon;
        }, 2000);
    });
}

// Load account-specific data
async function loadAccountData(account) {
    try {
        // Get native PLS balance
        const plsBalance = await web3.eth.getBalance(account);
        document.getElementById('pls-balance').textContent = `${parseFloat(web3.utils.fromWei(plsBalance, 'ether')).toFixed(4)} PLS`;
        
        // Get PLSN balance
        const plsnBalance = await plsnContract.methods.balanceOf(account).call();
        document.getElementById('plsn-balance').textContent = `${parseFloat(web3.utils.fromWei(plsnBalance, 'ether')).toFixed(4)} PLSN`;
        
        // Get WPLSN balance
        const wplsnBalance = await wplsnContract.methods.balanceOf(account).call();
        document.getElementById('wplsn-balance').textContent = `${parseFloat(web3.utils.fromWei(wplsnBalance, 'ether')).toFixed(4)} WPLSN`;
        
    } catch (error) {
        console.error("Error loading account data:", error);
    }
}

// Load PLSN token data
async function loadPLSNData() {
    try {
        // Basic token info
        const name = await plsnContract.methods.name().call();
        const symbol = await plsnContract.methods.symbol().call();
        const totalSupply = await plsnContract.methods.totalSupply().call();
        
        // Format total supply
        const formattedTotalSupply = web3.utils.fromWei(totalSupply, 'ether');
        
        // Get dead balances
        let deadBalance = web3.utils.toBN(0);
        for (const address of deadAddresses) {
            const balance = await plsnContract.methods.balanceOf(address).call();
            deadBalance = deadBalance.add(web3.utils.toBN(balance));
        }
        const formattedDeadBalance = web3.utils.fromWei(deadBalance.toString(), 'ether');
        
        // Fee structure
        const devFee = await plsnContract.methods.devFee().call();
        const liquidityFee = await plsnContract.methods.liquidityFee().call();
        const marketingFee = await plsnContract.methods.marketingFee().call();
        const reflectionFee = await plsnContract.methods.reflectionFee().call();
        const totalFee = await plsnContract.methods.totalFee().call();
        
        // Token settings
        const maxTxAmount = await plsnContract.methods._maxTxAmount().call();
        const maxWalletToken = await plsnContract.methods._maxWalletToken().call();
        const swapThreshold = await plsnContract.methods.swapThreshold().call();
        const sellMultiplier = await plsnContract.methods.sellMultiplier().call();
        
        // Update UI
        document.getElementById('token-name').textContent = name;
        document.getElementById('token-symbol').textContent = symbol;
        document.getElementById('total-supply').textContent = `${parseFloat(formattedTotalSupply).toLocaleString()} ${symbol}`;
        document.getElementById('dead-balance').textContent = `${parseFloat(formattedDeadBalance).toLocaleString()} ${symbol}`;
        
        document.getElementById('dev-fee').textContent = `${devFee}%`;
        document.getElementById('liquidity-fee').textContent = `${liquidityFee}%`;
        document.getElementById('marketing-fee').textContent = `${marketingFee}%`;
        document.getElementById('reflection-fee').textContent = `${reflectionFee}%`;
        document.getElementById('total-fee').textContent = `${totalFee}%`;
        
        document.getElementById('max-tx-amount').textContent = `${web3.utils.fromWei(maxTxAmount, 'ether')} ${symbol}`;
        document.getElementById('max-wallet-token').textContent = `${web3.utils.fromWei(maxWalletToken, 'ether')} ${symbol}`;
        document.getElementById('swap-threshold').textContent = `${web3.utils.fromWei(swapThreshold, 'ether')} ${symbol}`;
        document.getElementById('sell-multiplier').textContent = `${sellMultiplier}x`;
        
    } catch (error) {
        console.error("Error loading PLSN data:", error);
    }
}

// Load Distributor data
async function loadDistributorData() {
    try {
        const minDistribution = await distributorContract.methods.minDistribution().call();
        const minPeriod = await distributorContract.methods.minPeriod().call();
        const totalDistributed = await distributorContract.methods.totalDistributed().call();
        
        // Convert minPeriod from seconds to minutes/hours for better readability
        let minPeriodDisplay;
        if (minPeriod < 3600) {
            // Less than 1 hour, show in minutes
            const minutes = Math.round(minPeriod / 60);
            minPeriodDisplay = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
        } else {
            // 1 hour or more, show in hours
            const hours = (minPeriod / 3600).toFixed(1);
            minPeriodDisplay = `${hours} hour${hours === '1.0' ? '' : 's'}`;
        }
        
        document.getElementById('min-distribution').textContent = `${web3.utils.fromWei(minDistribution, 'ether')} USDL`;
        document.getElementById('min-period').textContent = `${minPeriodDisplay} (${minPeriod} seconds)`;
        document.getElementById('total-distributed').textContent = `${web3.utils.fromWei(totalDistributed, 'ether')} USDL`;
        
    } catch (error) {
        console.error("Error loading Distributor data:", error);
    }
}

// Token Actions

async function approveTokens() {
    if (!accounts.length) {
        Swal.fire('Error', 'Please connect your wallet first', 'error');
        return;
    }

    const spender = document.getElementById('spender-address').value;
    const amount = document.getElementById('approve-amount').value;

    if (!spender || !web3.utils.isAddress(spender)) {
        Swal.fire('Error', 'Please enter a valid spender address', 'error');
        return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        Swal.fire('Error', 'Please enter a valid amount', 'error');
        return;
    }

    try {
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        Swal.fire({
            title: 'Confirm Approval',
            text: `Approve ${amount} PLSN for ${spender.substring(0, 6)}...${spender.substring(38)}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const tx = await plsnContract.methods.approve(spender, amountWei)
                    .send({ from: accounts[0] });
                
                Swal.fire('Success', 'Approval transaction successful!', 'success');
                console.log('Approval tx:', tx);
            }
        });
    } catch (error) {
        console.error('Approval error:', error);
        Swal.fire('Error', 'Approval failed: ' + error.message, 'error');
    }
}

async function approveMaxTokens() {
    if (!accounts.length) {
        Swal.fire('Error', 'Please connect your wallet first', 'error');
        return;
    }

    const spender = document.getElementById('spender-address').value;

    if (!spender || !web3.utils.isAddress(spender)) {
        Swal.fire('Error', 'Please enter a valid spender address', 'error');
        return;
    }

    try {
        Swal.fire({
            title: 'Confirm Max Approval',
            text: `Approve unlimited PLSN for ${spender.substring(0, 6)}...${spender.substring(38)}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const tx = await plsnContract.methods.approveMax(spender)
                    .send({ from: accounts[0] });
                
                Swal.fire('Success', 'Max approval transaction successful!', 'success');
                console.log('Max approval tx:', tx);
            }
        });
    } catch (error) {
        console.error('Max approval error:', error);
        Swal.fire('Error', 'Max approval failed: ' + error.message, 'error');
    }
}

async function transferTokens() {
    if (!accounts.length) {
        Swal.fire('Error', 'Please connect your wallet first', 'error');
        return;
    }

    const recipient = document.getElementById('recipient-address').value;
    const amount = document.getElementById('transfer-amount').value;

    if (!recipient || !web3.utils.isAddress(recipient)) {
        Swal.fire('Error', 'Please enter a valid recipient address', 'error');
        return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        Swal.fire('Error', 'Please enter a valid amount', 'error');
        return;
    }

    try {
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        Swal.fire({
            title: 'Confirm Transfer',
            text: `Transfer ${amount} PLSN to ${recipient.substring(0, 6)}...${recipient.substring(38)}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const tx = await plsnContract.methods.transfer(recipient, amountWei)
                    .send({ from: accounts[0] });
                
                Swal.fire('Success', 'Transfer transaction successful!', 'success');
                console.log('Transfer tx:', tx);
                // Refresh balances after transfer
                loadAccountData(accounts[0]);
            }
        });
    } catch (error) {
        console.error('Transfer error:', error);
        Swal.fire('Error', 'Transfer failed: ' + error.message, 'error');
    }
}

async function transferFromTokens() {
    if (!accounts.length) {
        Swal.fire('Error', 'Please connect your wallet first', 'error');
        return;
    }

    const sender = document.getElementById('sender-address').value;
    const recipient = document.getElementById('recipient-address-from').value;
    const amount = document.getElementById('transfer-from-amount').value;

    if (!sender || !web3.utils.isAddress(sender)) {
        Swal.fire('Error', 'Please enter a valid sender address', 'error');
        return;
    }

    if (!recipient || !web3.utils.isAddress(recipient)) {
        Swal.fire('Error', 'Please enter a valid recipient address', 'error');
        return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        Swal.fire('Error', 'Please enter a valid amount', 'error');
        return;
    }

    try {
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        Swal.fire({
            title: 'Confirm Transfer From',
            text: `Transfer ${amount} PLSN from ${sender.substring(0, 6)}...${sender.substring(38)} to ${recipient.substring(0, 6)}...${recipient.substring(38)}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const tx = await plsnContract.methods.transferFrom(sender, recipient, amountWei)
                    .send({ from: accounts[0] });
                
                Swal.fire('Success', 'Transfer From transaction successful!', 'success');
                console.log('Transfer From tx:', tx);
                // Refresh balances after transfer
                loadAccountData(accounts[0]);
            }
        });
    } catch (error) {
        console.error('Transfer From error:', error);
        Swal.fire('Error', 'Transfer From failed: ' + error.message, 'error');
    }
}

// Initialize the app when the page loads
window.addEventListener('load', init);