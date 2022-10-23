// By @apanentscratch2022 on Scratch
var counter = 0
var string = ''
var list = []
var bool = false

class MyUtilities {

  constructor() {}

  getInfo() {
    return {
      id: 'myutilities',
      name: 'apanentscratch2022',

      color1: '#ff0000',
      color2: '#ff0000',
      color3: '#ee0000',
      
      blocks: [
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] == [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'squareRoot',

          blockType: Scratch.BlockType.REPORTER,

          text: 'square root of [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'undefined',

          blockType: Scratch.BlockType.REPORTER,

          text: 'undefined',
          arguments: {}
        },
        {
          opcode: 'naN',

          blockType: Scratch.BlockType.REPORTER,

          text: 'NaN',
          arguments: {}
        },
        {
          opcode: 'ifthen',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'BANANA'
            }
          }
        },
        {
          opcode: 'random',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Math.random([A])',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'euler',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Euler',
          arguments: {}
        },
        {
          opcode: 'fround',

          blockType: Scratch.BlockType.REPORTER,

          text: 'fround of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5.05
            }
          }
        },
        {
          opcode: 'isgr',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 5
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'isle',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 6
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 5
            }
          }
        },
        {
          opcode: 'exp',

          blockType: Scratch.BlockType.REPORTER,

          text: 'exp of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            }
          }
        },
        {
          opcode: 'trunc',

          blockType: Scratch.BlockType.REPORTER,

          text: 'trunc of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 8
            }
          }
        },
        {
          opcode: 'ifnumerr',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'if [A] leads to an error',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: NaN
            }
          }
        },
        {
          opcode: 'uppercase',

          blockType: Scratch.BlockType.REPORTER,

          text: 'uppercase of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apanentscratch2022'
            }
          }
        },
        {
          opcode: 'lowercase',

          blockType: Scratch.BlockType.REPORTER,

          text: 'lowercase of [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APANENTSCRATCH2022'
            }
          }
        },
        {
          opcode: 'dateNow',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Date.now',
          arguments: {}
        },
        {
          opcode: 'currentsec',

          blockType: Scratch.BlockType.REPORTER,

          text: 'current second',
          arguments: {}
        },
        {
          opcode: 'currentmin',

          blockType: Scratch.BlockType.REPORTER,

          text: 'current minute',
          arguments: {}
        },
        {
          opcode: 'currenthou',

          blockType: Scratch.BlockType.REPORTER,

          text: 'current hour',
          arguments: {}
        },
        {
          opcode: 'currentday',

          blockType: Scratch.BlockType.REPORTER,

          text: 'current day',
          arguments: {}
        },
        {
          opcode: 'fetch',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get text [URL] if error, return [ERR]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://projects.scratch.mit.edu/613802646'
            },
            ERR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'no text'
            }
          }
        },
        {
          opcode: 'count',

          blockType: Scratch.BlockType.REPORTER,

          text: 'counter',
          arguments: {}
        },
        {
          opcode: 'setcounter',

          blockType: Scratch.BlockType.COMMAND,

          text: 'set counter to [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'inccounter',

          blockType: Scratch.BlockType.COMMAND,

          text: 'increase counter',
          arguments: {}
        },
        {
          opcode: 'deccounter',

          blockType: Scratch.BlockType.COMMAND,

          text: 'decrease counter',
          arguments: {}
        },
        {
          opcode: 'join3',

          blockType: Scratch.BlockType.REPORTER,

          text: 'join [A] [B] [C]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' banana'
            },
            C: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' blueberry'
            }
          }
        },
        {
          opcode: 'join4',

          blockType: Scratch.BlockType.REPORTER,

          text: 'join [A] [B] [C] [D]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' banana'
            },
            C: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' blueberry'
            },
            D: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' strawberry'
            }
          }
        },
        {
          opcode: 'trueorfalse',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'boolean [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              menu: 'bools'
            }
          }
        },
        {
          opcode: 'thing',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              menu: 'chars'
            }
          }
        },
        {
          opcode: 'true',

          blockType: Scratch.BlockType.REPORTER,

          text: 'true in string',
          arguments: {}
        },
        {
          opcode: 'false',

          blockType: Scratch.BlockType.REPORTER,

          text: 'false in string',
          arguments: {}
        },
         {
          opcode: 'inf',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Infinity',
          arguments: {}
        },
         {
          opcode: 'pi',

          blockType: Scratch.BlockType.REPORTER,

          text: 'pi',
          arguments: {}
        },
        {
          opcode: 'notEqualTo',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] != [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'ifchance',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A]% chance',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'color',

          blockType: Scratch.BlockType.REPORTER,

          text: 'hex code of [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ff0000'
            }
          }
        },
        {
          opcode: 'creator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'creator',
          arguments: {}
        },
        {
          opcode: 'stringg',

          blockType: Scratch.BlockType.REPORTER,

          text: 'string',
          arguments: {}
        },
        {
          opcode: 'setstring',

          blockType: Scratch.BlockType.COMMAND,

          text: 'set string to [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'changestring',

          blockType: Scratch.BlockType.COMMAND,

          text: 'add [A] to string',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'listt',

          blockType: Scratch.BlockType.REPORTER,

          text: 'list',
          arguments: {}
        },
        {
          opcode: 'addtolist',

          blockType: Scratch.BlockType.COMMAND,

          text: 'add [A] to list',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'clearlist',

          blockType: Scratch.BlockType.COMMAND,

          text: 'clear list',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          // Added by @kilgorezer
          opcode: 'extrastuffstrtobool',
          blockType: Scratch.BlockType.BOOLEAN,
          text:  '[IN]',
          arguments: {
            IN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'itemoflist',

          blockType: Scratch.BlockType.REPORTER,

          text: 'item [A] of list',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'lengthoflist',

          blockType: Scratch.BlockType.REPORTER,

          text: 'length of list',
          arguments: {}
        },
        {
          opcode: 'listcont',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'list contains [A]?',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'thing'
            }
          }
        },
        {
          opcode: 'roundz',

          blockType: Scratch.BlockType.REPORTER,

          text: 'roundz [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0.5
            }
          }
        },
        {
          opcode: 'setbool',

          blockType: Scratch.BlockType.COMMAND,

          text: 'set bool to [A]',
          arguments: {
            A: { 
              type: Scratch.ArgumentType.STRING,
              menu: 'bools'
            }
          }
        },
        {
          opcode: 'boool',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'current boolean',
          arguments: {}
        },
        {
          opcode: 'e',

          blockType: Scratch.BlockType.REPORTER,

          text: 'E',
          arguments: {}
        },
        {
          opcode: 'negative',

          blockType: Scratch.BlockType.REPORTER,

          text: '-[A]',
          arguments: {}
        }
      ],
      menus: {
        bools: {
          items: ['true', 'false'],
          acceptReporters: true
        },
        chars: {
          items: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
          acceptReporters: true
        }
      }
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

  squareRoot({A}) {
    return Math.sqrt(A);
  }

  undefined() {
    return 'undefined';
  }
  
  naN() {
    return "NaN";
  }

  ifthen({A, B, C}) { // fixed ifthen and ifelse opcode error
    return Boolean(A) ? '' + B : '' + C // Minor bug fix
  }

  random ({A}) {
    return Math.random() * A;
  }

  exponent ({A, B}) {
    return A ** B // you dont have to do Math.pow because it is easier
  }

  euler () {
    return Math.E // why not?
  }

  fround ({A}) {
    return Math.fround(A)
  }

  isgr ({A, B}) {
    return A > B || A == B
  }

  isle ({A, B}) {
    return A < B || A == B
  }

  exp ({A}) {
    return Math.exp(A)
  }

  trunc ({A}) {
    return Math.trunc(A)
  }

  ifnumerr ({A}) {
    return isNaN(Number(A))
  }

  uppercase ({A}) {
    return A.toUpperCase()
  }

  lowercase ({A}) {
    return A.toLowerCase()
  }
  
  dateNow () {
    return Date.now()
  }

  currentsec () {
    return (Date.now() / 1000) % 60
  }

  currentmin () {
    return Math.floor(Date.now() / 1000 / 60) % 60
  }

  currenthou () {
    return Math.floor(Date.now() / 1000 / 3600) % 24
  }

  currentday () {
    return Math.floor(Date.now() / 1000 / 86400) % 30
  }

  fetchFrom({URL, ERR}) {
    return fetch(URL).then(res => res.text())
      .catch(err => ERR);
  }

  count () {
    return counter
  }

  setcounter ({A}) {
    counter = A
  }

  inccounter () {
    counter++;
  }

  deccounter () {
    counter--;
  }

  join3 ({A, B, C}) {
    return "" + A + B + C;
  }
  
  join4 ({A, B, C, D}) {
    return "" + A + B + C + D;
  }
  
  trueorfalse({A}) {
    return A;
  }

  thing({A}) {
    return A;
  }

  true() {
    return 'true';
  }

  false() {
    return 'false'
  }

  inf() {
    return 9999999999 ** 9999999999
  }

  pi() {
    return Math.PI
  }

  notEqualTo({A, B}) {
    return !(A == B);
  }

  ifchance({A}) {
    return Math.random() <= A / 100
  }

  color({A}) {
    return A
  }

  creator() {
    return 'apanentscratch2022'
  }

  stringg() {
    return string
  }

  setstring ({A}) {
    string = A
  }

  changestring ({A}) {
    string += A
  }

  listt() {
    return list.join(' ')
  }

  addtolist({A}) {
    list.push(A)
  }

  clearlist() {
    list = []
  }
  
  extrastuffstrtobool(a) {
    // Added by @kilgorezer
    return a.IN;
  }

  itemoflist({A}) {
    var n = A
    n--;
    return list[n]
  }

  lengthoflist() {
    return list.length
  }

  listcont({A}) {
    return list.includes(A)
  }

  roundz({A}) {
    var fun = A
    fun = fun - Math.abs(0.00000000001)
    return Math.round(fun)
  }

  setbool({A}) {
    bool = A
  }

  boool() {
    return bool
  }

  e() {
    return Math.E
  }

  negative({A}) {
    return A * -1
  }
}
Scratch.extensions.register(new MyUtilities());
