(function ($) {
    $(document).ready(function () { 
        var abi = [
            {
              constant: false,
              inputs: [
                {
                  name: "_level",
                  type: "uint256",
                },
              ],
              name: "buyLevel",
              outputs: [],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "_referrerID",
                  type: "uint256",
                },
              ],
              name: "regUser",
              outputs: [],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "_manager",
                  type: "address",
                },
              ],
              name: "setManager",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              payable: true,
              stateMutability: "payable",
              type: "fallback",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: "_user",
                  type: "address",
                },
                {
                  indexed: true,
                  name: "_referrer",
                  type: "address",
                },
                {
                  indexed: false,
                  name: "_time",
                  type: "uint256",
                },
              ],
              name: "regLevelEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: "_user",
                  type: "address",
                },
                {
                  indexed: false,
                  name: "_level",
                  type: "uint256",
                },
                {
                  indexed: false,
                  name: "_time",
                  type: "uint256",
                },
              ],
              name: "buyLevelEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: "_user",
                  type: "address",
                },
                {
                  indexed: false,
                  name: "_level",
                  type: "uint256",
                },
                {
                  indexed: false,
                  name: "_time",
                  type: "uint256",
                },
              ],
              name: "prolongateLevelEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: "_user",
                  type: "address",
                },
                {
                  indexed: true,
                  name: "_referral",
                  type: "address",
                },
                {
                  indexed: false,
                  name: "_level",
                  type: "uint256",
                },
                {
                  indexed: false,
                  name: "_time",
                  type: "uint256",
                },
              ],
              name: "getMoneyForLevelEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: "_user",
                  type: "address",
                },
                {
                  indexed: true,
                  name: "_referral",
                  type: "address",
                },
                {
                  indexed: false,
                  name: "_level",
                  type: "uint256",
                },
                {
                  indexed: false,
                  name: "_time",
                  type: "uint256",
                },
              ],
              name: "lostMoneyForLevelEvent",
              type: "event",
            },
            {
              constant: true,
              inputs: [],
              name: "currUserID",
              outputs: [
                {
                  name: "",
                  type: "uint256",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                {
                  name: "_user",
                  type: "address",
                },
              ],
              name: "findFreeReferrer",
              outputs: [
                {
                  name: "",
                  type: "address",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                {
                  name: "",
                  type: "uint256",
                },
              ],
              name: "LEVEL_PRICE",
              outputs: [
                {
                  name: "",
                  type: "uint256",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "manager",
              outputs: [
                {
                  name: "",
                  type: "address",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "owner",
              outputs: [
                {
                  name: "",
                  type: "address",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "ownerWallet",
              outputs: [
                {
                  name: "",
                  type: "address",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                {
                  name: "",
                  type: "uint256",
                },
              ],
              name: "userList",
              outputs: [
                {
                  name: "",
                  type: "address",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                {
                  name: "",
                  type: "address",
                },
              ],
              name: "users",
              outputs: [
                {
                  name: "isExist",
                  type: "bool",
                },
                {
                  name: "id",
                  type: "uint256",
                },
                {
                  name: "referrerID",
                  type: "uint256",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                {
                  name: "_user",
                  type: "address",
                },
                {
                  name: "_level",
                  type: "uint256",
                },
              ],
              name: "viewUserLevelExpired",
              outputs: [
                {
                  name: "",
                  type: "uint256",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                {
                  name: "_user",
                  type: "address",
                },
              ],
              name: "viewUserReferral",
              outputs: [
                {
                  name: "",
                  type: "address[]",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
        ];
        var address = "0x77193cc3832d5c6396d60a73b2d33107dc9ef291";
        var myContractInstance;
        var MyContract;
        var account = "";
        console.log("login")

            if (typeof web3 !== "undefined") {
              $("#lgambtn").show();
              web3 = new Web3(web3.currentProvider);
        
              web3.eth.getAccounts().then(function (result) {
                account = result[0];
              });
              MyContract = new web3.eth.Contract(abi, address);
              // initiate contract for an address
        
              myContractInstance = MyContract;
            } else {
              const infura =
                "https://rinkeby.infura.io/v3/a380edd901454cf6ba4b4cefe4c8f7be";
              const web3 = new Web3(new Web3.providers.HttpProvider(infura));
        
              MyContract = new web3.eth.Contract(abi, address);
              // initiate contract for an address
              myContractInstance = MyContract;
            }


 

        // lgmbtn btn btn-bg--cta--1 rounded--full btn-hover--3d btn-hover--splash mb-2
        $("#login_btnmm").click(function () {
            try {
              account = localStorage.getItem("address");
              myContractInstance.methods
                .users(account)
                .call()
                  .then(function (result) {
                    console.log("entro",result)
                  if (result[0]) {
                    localStorage.setItem("address", account);
                    location.href = "https://1dapp.github.io/oneid-dashboard";
                  } else {
                    $(".error").html("You need to register first");
                    $(".error").show();
                  }
                });
            } catch (e) {
              console.log(e);
            }
        });
        $(".lgmbtn").click(function () {
            var add = $("#wallet").val();
            console.log(add)
            if (add.length > 0) {
              try {
                myContractInstance.methods
                  .users(add)
                  .call()
                  .then(function (result) {
                    console.log(result);
                    if (result[0]) {
                      localStorage.setItem("address", add);
                    //  location.href = "https://1dapp.github.io/oneid-dashboard";
                    } else {
                      $(".error").html("You need to register first");
                      $(".error").show();
                    }
                  });
              } catch (err) {
                console.log(err);
              }
            } else {
              $(".error").html("Enter Valid ETH address");
              $(".error").show();
            }
          });
    })
})(jQuery);