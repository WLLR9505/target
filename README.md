# target

Um simples menu customizável utilizando o terminal

# Instalação
```npm install target```

# Usando

```js
// 1 - faça require do módulo
var target = require('target');

// 2 - crie os controles
var control = new target.Controls();

// 3 - crie o(s) menu(s)
//NOTA: submenu é opcional
var Example = [
    'item',
    'item',
    'item',
    'item',
    'item',
];
var sub = ['alterar', 'excluir'];

// 4 - faça um loop chamando o menu
while (control.pos1 >= 0) {
        control = target.menu(control, 'cyan', Example, sub);
    // 5 - faça um ponto de saida logo em seguida
    if (control.pos1 == -1) {
            console.clear();
            return 0;
        }
    // 6 - chame suas funções baseadas nos seletores do menu
    if (control.pos2 == 0) {
        yourFunction(control.pos1);
    } else if (control.pos2 == 1) {
        yourSecondFunction(control.pos1);
    }
}
```

## Submenu
O uso do submenu é opcional e indicado apenas quando o menu principal tem o mesmo submenu para seus itens, exemplo: listas. Quando utilizado o **.pos1** indicará o item do menu principal selecionado, e o **.pos2** a função que será aplicada neste item.

Se não for utilizar o submenu o omita da função e utilize apenas **.pos1**

# Controles

A classe controles possui além das teclas responsáveis pelo direcionamento do menu, a posição atual do seletor no menu **.pos1** e **.pos2** que devem ser utilizados para se referir as funções dos mesmos depois de selecionados.


Os controles padrõe utilizando:
```js
    var control = new Controls();
```

| função | Tecla |
|-|-|
| selecionar | e |
| voltar | q |
| cima | w |
| direita | d |
| baixo | s |
| esquerda | a |

> **Nota**: você pode customizar os controles com o seguinte comando
> ```js
>     var control = new target.Controls('o', 'u', 'i', 'l', 'k', 'j');
> ```