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

function exibirPlacasDeRede() {
    const interfaces = os.networkInterfaces();
    console.log('\nPlacas de Rede:');
    for (const interfaceName in interfaces) {
        const addresses = interfaces[interfaceName];
        addresses.forEach(address => {
            if (address.family === 'IPv4') {
                console.log(`- ${interfaceName}: ${address.address}`);
            }
        });
    }
}

exibirPlacasDeRede();
