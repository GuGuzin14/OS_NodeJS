const os = require('os');

console.log('Informações do Sistema:');
console.log(`Sistema Operacional: ${os.type()}`);
console.log(`Plataforma: ${os.platform()}`);
console.log(`Versão: ${os.release()}`);
console.log(`Arquitetura: ${os.arch()}`);
console.log(`Tempo de Atividade: ${os.uptime()} segundos`);
console.log(`Nome do Host: ${os.hostname()}`);
console.log(`Diretório Inicial: ${os.homedir()}`);
console.log(`Diretório Temporário: ${os.tmpdir()}`);

console.log('\nInformações de Memória:');
console.log(`Memória Total: ${(os.totalmem() / 1e9).toFixed(2)} GB`);
console.log(`Memória Livre: ${(os.freemem() / 1e9).toFixed(2)} GB`);

console.log('\nInformações de Rede:');
console.log(os.networkInterfaces());