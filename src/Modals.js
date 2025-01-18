(function(Scratch) {
    'use strict';
    let returned;
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error("Modals needs to run unsandboxed!");
    }
  
    class Modals {
        
        getInfo() {
            return {
              id: 'sfmodals',
              name: "Modals",
              color1: "#ff6666",
              color2: "#7c7883",
              color3: "#fffff",
              blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNTMuMTAwNjEiIGhlaWdodD0iMTUzLjEwMDYxIiB2aWV3Qm94PSIwLDAsMTUzLjEwMDYxLDE1My4xMDA2MSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2My40NDk2OSwtMTAzLjQ0OTcpIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTYzLjQ0OTY5LDI1Ni41NTAzMXYtMTUzLjEwMDYxaDE1My4xMDA2MXYxNTMuMTAwNjF6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE2My40NDk3LDIxNC4wMjY3MWMwLC0yMS43MDkyOSAwLC01OC4wMTQyMiAwLC02OS42OTc5N2MwLC03LjE1MzgzIDkuODAwMTYsLTE1LjIzMTc1IDE0LjkxODUsLTE1LjIzMTc1YzE4LjI0MzM4LDAgOTUuODcxNjIsMCAxMjYuMDgyODUsMGM3LjUxNzY0LDAgMTIuMDk5MjUsNS4wNjgwMSAxMi4wOTkyNSwxMC4xNDE0NWMwLDExLjcxNTkgMCw1OS41MTQ5MyAwLDgxLjA1MzI2YzAsNi41MDI0IC02LjUwODk5LDEwLjYxMTMyIC0xMy4yNzM5NCwxMC42MTEzMmMtMTYuNTE4NDQsMCAtODcuMzI0NTIsMCAtMTIxLjM4NDExLDBjLTExLjIxMjQ0LDAgLTE4LjQ0MjU2LC02Ljg5NTY4IC0xOC40NDI1NiwtMTYuODc2MzF6IiBmaWxsPSIjN2M3ODgzIi8+PHBhdGggZD0iTTI1My41NDgwNCwyMDkuNTc0MjljLTAuMDQyMDMsLTUuMzExMDUgNC4yNzA1NSwtOS42NDM4IDguMDY0NTYsLTkuNjQzOGM2LjA1NiwwIDI0LjU5NjA4LDAgMzYuMzE0MzksMGM1Ljg4NDA0LDAgOS45NTY0Myw1LjIyOCAxMC4wNDgxMiwxMS4zMjIyYzAuMTIyOTUsOC4xNzE5MyAtMy41MTcxLDExLjc3OTk0IC04LjY3NDg5LDExLjc3OTk0Yy0xMi4wMzIxNCwwIC0zMi45OTI4OSwwIC0zOS4wNjA4NSwwYy0zLjI0NTcsMCAtNi42MTUyOCwtMy44NDc2NyAtNi42OTEzMywtMTMuNDU4MzR6IiBmaWxsPSIjZmY2NjY2Ii8+PHBhdGggZD0iTTI2Ni43MjU0NCwyMTMuNzcwMjh2LTQuNTc3NDRoMjguMDc0OTl2NC41Nzc0NHoiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMTc2LjIsMTQ4LjYzMzMzdi04aDEwOXY4eiIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0xNzYuMiwxNjEuNjMzMzN2LThoMTA5djh6IiBmaWxsPSIjZmZmZmZmIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6NzYuNTUwMzEyNjk3NjkyNzk6NzYuNTUwMzA0NTgxNTg1OTgtLT4=",
              blocks: [
                {
                  opcode: 'showmodal',
                  blockType: Scratch.BlockType.COMMAND,
                  text: 'show [TYPE] modal that says [TEXT]',
                  arguments: {
                    TEXT: {
                      type: Scratch.ArgumentType.STRING,
                      defaultValue: 'Hello World'
                    },
                    TYPE: {
                      type: Scratch.ArgumentType.STRING,
                      menu: 'TYPES'
                    }
                  }
                },
                {
                    opcode: 'promptph',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'show prompt that says [TEXT] with default text [PH]',
                    arguments: {
                      TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Foo'
                      },
                      PH: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "Bar"
                      },
                      
                    }
                  },
                {
                    opcode: 'response',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'latest prompt response',
                  }
              ],
              menus: {
                TYPES: {
                  acceptReporters: true,
                  items: ['alert', "prompt"]
                }
              }
            };
          }
        
      
      showmodal(args) {
        if (args.TYPE == "alert") {
alert(args.TEXT);
returned = "OK";
        } else if (args.TYPE == "prompt") {
            returned = prompt(args.TEXT);
                    }
                    else {
                        alert("Error: Invalid Modal");
                        returned = "Error: Invalid Modal";
                    }
      }
      response(args) {
        return returned;
      }
      promptph(args) {
        returned = prompt(args.TEXT, args.PH);            
      }
      
    }
    Scratch.extensions.register(new Modals());
  })(Scratch);