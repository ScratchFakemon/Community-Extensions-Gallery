//Test by Scratch_Fakemon
//Based on the example from the TurboWarp Docs
//With help from BambusOS
const Icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjQuODQyOSIgaGVpZ2h0PSIxMjQuODQyOSIgdmlld0JveD0iMCwwLDEyNC44NDI5LDEyNC44NDI5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc3LjU3ODU1LC0xMTcuNTc4NTUpIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0xNzcuNTc4NTUsMjQyLjQyMTQ1di0xMjQuODQyOWgxMjQuODQyOXYxMjQuODQyOXoiIGZpbGwtb3BhY2l0eT0iMC4wMTE3NiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Im5vbmUiLz48ZyBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjxwYXRoIGQ9Ik0yMTAuNDk1MTcsMTIzLjQwODk4YzQuMjczNzgsLTEuNjg3NDUgMy45OTExMSwxLjczNTI0IDIzLjM5MTM3LDUyLjA5NzMzYzExLjAyOTU0LDI5LjQ3MTEgMTkuNzYwNjcsNTMuNjE4NjUgMTYuNTUwMTEsNTQuNjI2OTdjLTQuNjg1MTEsMS44MDg1NCAtMTIuMzYxODIsLTIyLjYyNjIyIC0yMy4zOTEzNiwtNTIuMDk3MzNjLTE2Ljg5MTcyLC00OC4xNjM3NCAtMjEuNjQyMTQsLTUyLjc4MjM3IC0xNi41NTAxMiwtNTQuNjI2OTd6IiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjI5LjcwNTg1LDE5MC41NjI4OWMtOS4xNDI3NywwIC0xNi41NTQ0MywtNy4yNDc1NiAtMTYuNTU0NDMsLTE2LjE4NzkyYzAsLTAuNzg1ODcgLTYuMzEzNTIsLTkuMjYyODUgLTUuODMyNDUsLTEyLjkwNzg2YzAuNDA0NTIsLTIuNzYyOTMgOS41NTQzMywtMC4zMDAzIDExLjUzMDkzLC0wLjU0ODc3YzQuODYxMDIsLTEuMDAxODcgNS40NTQyLC0yLjczMTI5IDEwLjg1NTk2LC0yLjczMTI5YzEuNTc4NzYsMCAzLjUzNjk0LC03LjAzMzg5IDYuMDczNTUsLTUuNDg4ODRjNC42OTE1OSwyLjg1NzY0IDEwLjQ4MDg5LDE1Ljg3Mzg0IDEwLjQ4MDg5LDIxLjY3Njc0YzAsOC45NDAzNiAtNy40MTE2OCwxNi4xODc5MiAtMTYuNTU0NDMsMTYuMTg3OTJ6IiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjUyLjUzOTkyLDIwOS41MDEyNGMtMy45NTAxOSwyLjc0NjE0IC04LjE0MDczLDQuMzM5MzMgLTEyLjU1NTkyLDQuNzYxNjJjLTQuNTUwODQsMC40MzUyNSAtOC40NjA1MywwLjc2MTE2IC0xMi4yNDM2MywtMi4zODc0Yy03LjQ1MzQ0LC02LjIwMzI3IC04LjM0MzA3LC0xOS4yMTAzNyAtMi4xOTE3MSwtMjQuNTUwMTRjMS40NDU5NCwtMS4yNTU0NyAzLjI2ODE0LC0yLjQ1MzczIDQuNTMwNzUsLTMuMDc2MTVjMS43NjY5OCwtMC44NzEwNSAxLjkxOTg2LC0xLjAwMDU1IDUuNzE2MDYsLTEuOTQ5OTZjNi4wNDM4OSwtMC45MzgzIDkuOTI5MTcsLTAuOTA4MDYgMTQuNTUyNzQsMi45NGM3LjQ1MzQ0LDYuMjAzMjcgOC40MzQ2OSwxNi45MDY2MiAyLjE5MTcxLDI0LjI2MjAzeiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzMC4zNjk0LDIzNC44NjM1NGMtMi41NjExNCwtNS42ODQyNSAtMS42ODg5MiwtOC4xNDc0MiAtMC44NjQwNiwtMTIuNjYzNzljMS4zNDY4NCwtNi4yNjk1OCAzLjkxMjU5LC04LjcxMDQzIDkuODQ2MjMsLTEwLjg2NTY1YzIuMjI1NDIsLTAuODA4MzEgNy43NDI1NSwtMi4zODI0OSAxMC44NTExLC0yLjczMjg1YzMuNjI0MDQsLTAuMzUzMDEgNi43ODMxLDAuNTgxMDMgOS40MDAwNiwyLjQ1NDMyYzIuMzQ5MTUsMS42ODE1NyAzLjAzODI3LDIuMTgyMDUgNi4zMzIsNi45MDgxNmMyLjYyMjMxLDQuNDc4ODkgNC40ODk4LDExLjQzNTg3IDAuNzQ5MiwxNi45MDU1NGMtMy42MDExLDUuMjY1NjYgLTExLjAyMzc3LDUuOTUzMzEgLTE4LjU4MzQ4LDUuOTUzMzFjLTguMzMwNTYsMCAtMTUuMDQzODYsLTAuNjI5MDMgLTE3LjczMTA1LC01Ljk1OTA1eiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIyOS45MTIyNiwxNzIuNzI5ODljLTEuNDExNDgsMCAtMi41NTU3MiwtMS4xNDQyMyAtMi41NTU3MiwtMi41NTU3M2MwLC0xLjQxMTQ5IDEuMTQ0MjMsLTIuNTU1NzIgMi41NTU3MiwtMi41NTU3MmMxLjQxMTUsMCAyLjU1NTcyLDEuMTQ0MjIgMi41NTU3MiwyLjU1NTcyYzAsMS40MTE1IC0xLjE0NDIyLDIuNTU1NzMgLTIuNTU1NzIsMi41NTU3M3oiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTI0MS44NzYsMTY1Ljk4ODY5eiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI0My42NTM4OCwxNjYuOTE0NzFjMCwxLjM3MDU4IC0wLjIyMjExLDEuNzQwODQgLTEuNTkyNjksMS43NDA4NGMtMC42ODUyOCwwIC0wLjkzNTMxLC0wLjM1MTg2IC0xLjM4NDQsLTAuODAwOTRjLTAuNDQ5MDgsLTAuNDQ5MDggLTAuODAwOTMsLTAuOTk1NDIgLTAuODAwOTMsLTEuNjgwNzFjMCwtMS4zNzA1OCAtMC4wNzQyMSwtMS43NDA4NSAxLjI5NjM4LC0xLjc0MDg1YzEuMzcwNTgsMCAyLjQ4MTYzLDEuMTExMDcgMi40ODE2MywyLjQ4MTY1eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L2c+PGcgc3Ryb2tlPSIjMDAwMDAwIj48cGF0aCBkPSJNMjEyLjQ1Mjk4LDEyMS40NTExN2M0LjI3Mzc4LC0xLjY4NzQ1IDMuOTkxMTEsMS43MzUyNCAyMy4zOTEzNyw1Mi4wOTczM2MxMS4wMjk1NCwyOS40NzExIDE5Ljc2MDY3LDUzLjYxODY1IDE2LjU1MDExLDU0LjYyNjk3Yy00LjY4NTExLDEuODA4NTQgLTEyLjM2MTgyLC0yMi42MjYyMiAtMjMuMzkxMzYsLTUyLjA5NzMzYy0xNi44OTE3MiwtNDguMTYzNzQgLTIxLjY0MjE0LC01Mi43ODIzNyAtMTYuNTUwMTIsLTU0LjYyNjk3eiIgZmlsbD0iI2Q5OWU4MiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzMS42NjM2NiwxODguNjA1MDhjLTkuMTQyNzcsMCAtMTYuNTU0NDMsLTcuMjQ3NTYgLTE2LjU1NDQzLC0xNi4xODc5MmMwLC0wLjc4NTg3IC02LjMxMzUyLC05LjI2Mjg1IC01LjgzMjQ1LC0xMi45MDc4NmMwLjQwNDUyLC0yLjc2MjkzIDkuNTU0MzMsLTAuMzAwMyAxMS41MzA5MywtMC41NDg3N2M0Ljg2MTAyLC0xLjAwMTg3IDUuNDU0MiwtMi43MzEyOSAxMC44NTU5NiwtMi43MzEyOWMxLjU3ODc2LDAgMy41MzY5NCwtNy4wMzM4OSA2LjA3MzU1LC01LjQ4ODg0YzQuNjkxNTksMi44NTc2NCAxMC40ODA4OSwxNS44NzM4NCAxMC40ODA4OSwyMS42NzY3NGMwLDguOTQwMzYgLTcuNDExNjgsMTYuMTg3OTIgLTE2LjU1NDQzLDE2LjE4NzkyeiIgZmlsbD0iI2ZjYjFlMyIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI1NC40OTc3MywyMDcuNTQzNDNjLTMuOTUwMTksMi43NDYxNCAtOC4xNDA3Myw0LjMzOTMzIC0xMi41NTU5Miw0Ljc2MTYyYy00LjU1MDg0LDAuNDM1MjUgLTguNDYwNTMsMC43NjExNiAtMTIuMjQzNjMsLTIuMzg3NGMtNy40NTM0NCwtNi4yMDMyNyAtOC4zNDMwNywtMTkuMjEwMzcgLTIuMTkxNzEsLTI0LjU1MDE0YzEuNDQ1OTQsLTEuMjU1NDcgMy4yNjgxNCwtMi40NTM3MyA0LjUzMDc1LC0zLjA3NjE1YzEuNzY2OTgsLTAuODcxMDUgMS45MTk4NiwtMS4wMDA1NSA1LjcxNjA2LC0xLjk0OTk2YzYuMDQzODksLTAuOTM4MyA5LjkyOTE3LC0wLjkwODA2IDE0LjU1Mjc0LDIuOTRjNy40NTM0NCw2LjIwMzI3IDguNDM0NjksMTYuOTA2NjIgMi4xOTE3MSwyNC4yNjIwM3oiIGZpbGw9IiNmZmQ5ODMiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMzIuMzI3MjEsMjMyLjkwNTczYy0yLjU2MTE0LC01LjY4NDI1IC0xLjY4ODkyLC04LjE0NzQyIC0wLjg2NDA2LC0xMi42NjM3OWMxLjM0Njg0LC02LjI2OTU4IDMuOTEyNTksLTguNzEwNDMgOS44NDYyMywtMTAuODY1NjVjMi4yMjU0MiwtMC44MDgzMSA3Ljc0MjU1LC0yLjM4MjQ5IDEwLjg1MTEsLTIuNzMyODVjMy42MjQwNCwtMC4zNTMwMSA2Ljc4MzEsMC41ODEwMyA5LjQwMDA2LDIuNDU0MzJjMi4zNDkxNSwxLjY4MTU3IDMuMDM4MjcsMi4xODIwNSA2LjMzMiw2LjkwODE2YzIuNjIyMzEsNC40Nzg4OSA0LjQ4OTgsMTEuNDM1ODcgMC43NDkyLDE2LjkwNTU0Yy0zLjYwMTEsNS4yNjU2NiAtMTEuMDIzNzcsNS45NTMzMSAtMTguNTgzNDgsNS45NTMzMWMtOC4zMzA1NiwwIC0xNS4wNDM4NiwtMC42MjkwMyAtMTcuNzMxMDUsLTUuOTU5MDV6IiBmaWxsPSIjYTZkMzg4IiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjMxLjg3MDA3LDE3MC43NzIwOGMtMS40MTE0OCwwIC0yLjU1NTcyLC0xLjE0NDIzIC0yLjU1NTcyLC0yLjU1NTczYzAsLTEuNDExNDkgMS4xNDQyMywtMi41NTU3MiAyLjU1NTcyLC0yLjU1NTcyYzEuNDExNSwwIDIuNTU1NzIsMS4xNDQyMiAyLjU1NTcyLDIuNTU1NzJjMCwxLjQxMTUgLTEuMTQ0MjIsMi41NTU3MyAtMi41NTU3MiwyLjU1NTczeiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJNMjQzLjgzMzgxLDE2NC4wMzA4OHoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNDUuNjExNjksMTY0Ljk1NjljMCwxLjM3MDU4IC0wLjIyMjExLDEuNzQwODQgLTEuNTkyNjksMS43NDA4NGMtMC42ODUyOCwwIC0wLjkzNTMxLC0wLjM1MTg2IC0xLjM4NDQsLTAuODAwOTRjLTAuNDQ5MDgsLTAuNDQ5MDggLTAuODAwOTMsLTAuOTk1NDIgLTAuODAwOTMsLTEuNjgwNzFjMCwtMS4zNzA1OCAtMC4wNzQyMSwtMS43NDA4NSAxLjI5NjM4LC0xLjc0MDg1YzEuMzcwNTgsMCAyLjQ4MTYzLDEuMTExMDcgMi40ODE2MywyLjQ4MTY1eiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L2c+PC9nPjwvZz48L3N2Zz4K"
const prgName = "Scratch_Fakemon's Test Extension!"
class Test {
    getInfo() {
      return {
        id: 'sfTest',
        name: prgName,
        menuIconURI: Icon,
        blockIconURI: Icon,
      color1: '#fcb1e3', 
      color2: '#ffd983', 
      color3: '#a6d388',
      docsURI: 'https://github.com/ScratchFakemon/MyScratchExtensions/blob/main/Test/Docs.md', 

        blocks: [
          {
            opcode: 'test1',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Test One!'
          },
            {
            opcode: 'test2',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Can has make test 2?'
          },
          {
            opcode: 'test3',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Do [I] have a [Brain]?',
            arguments: {
                I: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'I'
                },
                Brain: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'Brain'
                },
                
                
    
            }
          },
              
        ]
      };
    }
  
    test1() {
      return 'memes';
    }
     test2() {
      return 'true';
    }
    test3() {
        return 'false';
      }
  }
  
  
  Scratch.extensions.register(new Test());