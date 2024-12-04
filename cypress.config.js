const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 2000,
    baseUrl: "https://oldi.sussytoons.com/",
    specPattern: "**/*.feature",
    
    setupNodeEvents(on, config) {
      // Configuração do User-Agent e desativação da detecção de automação
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-blink-features=AutomationControlled'); // Desativa o controle de automação
          launchOptions.args.push('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
        }
        return launchOptions;
      });

      // Usando cucumber para pré-processar arquivos de feature
      on("file:preprocessor", cucumber());
    },
  },
});
