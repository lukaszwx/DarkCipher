# 🔐 Dark Cipher V1.0

Uma aplicação web elegante e minimalista para criptografia e descriptografia de texto usando Base64, com interface temática de terminal hacker.

## 🎯 Sobre o Projeto

**Dark Cipher** é um cipher/codificador que permite aos usuários criptografar e descriptografar mensagens de forma rápida e segura. A aplicação utiliza o algoritmo Base64 e apresenta uma interface futurista inspirada em terminais de hackers clássicos.

> ⚠️ **Nota**: Este projeto utiliza Base64 para fins educacionais. Base64 não é um algoritmo de criptografia seguro para dados sensíveis. Para segurança em produção, use algoritmos como AES, RSA ou similar.

## ✨ Funcionalidades

- ✅ **Criptografia de Texto** - Codifique seu texto em Base64
- ✅ **Descriptografia** - Decodifique mensagens codificadas
- ✅ **Interface Hacker** - Design temático dark com efeito neon vermelho
- ✅ **Responsiva** - Funciona em diversos tamanhos de tela
- ✅ **Sem Dependências Externas** - Código puro, rápido e leve
- ✅ **Tratamento de Erros** - Mensagens claras quando algo dá errado

## 🚀 Como Usar

1. **Abra o arquivo** `index.html` no seu navegador
2. **Escreva o texto** na caixa de entrada "ENTRADA_DE_DADOS"
3. **Escolha a operação**:
   - Clique em **"Criptografar"** para codificar o texto
   - Clique em **"Descriptografar"** para decodificar
4. **Veja o resultado** na seção "SAÍDA_PROCESSADA"

### Exemplo Prático

```
Entrada: "Olá Mundo"
Clique: Criptografar
Saída: "T2zDoSBNdW5kbw=="

Entrada: "T2zDoSBNdW5kbw=="
Clique: Descriptografar
Saída: "Olá Mundo"
```

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| HTML5 | Estrutura semântica |
| CSS3 | Estilização e animações Glitch |
| JavaScript (Vanilla) | Lógica de criptografia |
| Bootstrap Icons | Ícones de interface |
| Base64 API | Criptografia nativa do navegador |

## 📁 Estrutura de Arquivos

```
DarkCipher/
├── index.html          # Página principal (estrutura HTML)
├── style.css           # Estilos e efeitos visuais
├── script.js           # Lógica de criptografia
└── README.md          # Este arquivo
```

### Detalhamento dos Arquivos

**index.html**
- Contém a estrutura da interface
- Logo do Bootstrap Icons (ícone de chave)
- Textarea para entrada de dados
- Botões de ação (Criptografar/Descriptografar)
- Div para exibição do resultado

**style.css**
- Tema dark com fundo preto profundo
- Cores neon vermelho (#ff0000)
- Efeito Glitch no hover dos botões
- Animações suaves
- Responsividade básica
- Glow effects para ambiance hacker

**script.js**
- Função `cipher(mode)` - Responsável pela criptografia/descriptografia
- Validação de entrada
- Tratamento de erros robusto
- Suporte a Base64 nativo

## 🎨 Design & UX

### Paleta de Cores
- **Fundo**: Preto profundo (#050505)
- **Texto**: Vermelho hacker (#ff0000)
- **Borda**: Vermelho com glow neon
- **Botões**: Vermelho com efeito glitch no hover

### Efeitos Especiais
- **Glitch Effect**: Deslocamento xerox nos botões
- **Neon Glow**: Sombra vermelha brilhante
- **Hover Animation**: Transformação do botão com sombra branca

## 💻 Como Executar

### Opção 1: Navegador Direto
```bash
1. Navegue até a pasta DarkCipher
2. Clique duplo em index.html
3. Ou arraste index.html para o navegador
```

### Opção 2: Server Local (Recomendado)
```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server

# Depois acesse: http://localhost:8000
```

## 🔧 Desenvolvimento

### Adicionar Nova Funcionalidade

Para adicionar um novo algoritmo de criptografia, modifique `script.js`:

```javascript
function cipher(mode) {
    const input = document.getElementById("inputText").value;
    const outputDiv = document.getElementById("output");

    if(!input){
        outputDiv.innerText = "ERRO: NENHUM DADO DETECTADO";
        return;
    }

    try{
        if(mode === 'encode'){
            // Adicione aqui seu novo algoritmo
            const encoded = meuAlgoritmo(input);
            outputDiv.innerText = encoded;
        } else{
            // Decodificação
            const decoded = meuAlgoritmoDecode(input);
            outputDiv.innerText = decoded;
        }
    } catch (error) {
        outputDiv.innerText = "ERRO: FALHA AO PROCESSAR OS DADOS";
    }
}
```

## 📊 Performance

- **Tamanho Total**: ~5KB (HTML + CSS + JS)
- **Tempo de Carregamento**: < 100ms
- **Compatibilidade**: Todos os navegadores modernos (Chrome, Firefox, Safari, Edge)

## ⚠️ Limitações

- Base64 não é adequado para dados realmente sensíveis
- Limite de caracteres depende do navegador (geralmente ~1-2MB)
- Funciona offline, mas requer JavaScript habilitado

## 🚀 Próximas Melhorias

- [ ] Suporte a múltiplos algoritmos (AES, MD5, SHA256)
- [ ] Histórico de conversões
- [ ] Modo escuro/claro toggle
- [ ] Copiar resultado com um clique
- [ ] Modo de arquivo (upload/download)
- [ ] API REST para integração

## 📝 Licença

Este projeto é de código aberto e livre para uso educacional.

## 👤 Autor
Lucas Neves( lukaszwx)
Criado como projeto de estudo em criptografia básica e desenvolvimento web.

---

**Dark Cipher V1.0** | Criptografia Simples & Elegante 🔐
