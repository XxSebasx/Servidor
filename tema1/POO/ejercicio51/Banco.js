class Cliente{
    #nombre;
    #saldo;
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.#saldo = saldo;
    }

    getSaldo(){
        return this.#saldo;
    }

    getNombre(){
        return this.#nombre;
    }

    toString(){
        return this.#nombre + " tiene $" + this.#saldo;
    }
}

class Banco{
    #nombre;
    #clientes;
    constructor(nombre){
        this.#nombre = nombre;
        this.#clientes = [];
    }
    
    agregarCliente(cliente){
        this.#clientes.push(cliente);
    }

    mostrarClientes(){
        this.#clientes.forEach(cliente => {
            console.log(cliente.getNombre() + " tiene $" + cliente.getSaldo());
        });
    }

    mostrarSaldoTotal(){
        let saldoTotal = 0;
        this.#clientes.forEach(cliente => {
            saldoTotal += cliente.getSaldo();
        });
        console.log("Saldo total en el banco: $" + saldoTotal);
    }

    transferenciasClientes(nCliente,nClienteTransferido,saldo){
        let cliente = null;
        let clienteTransferido = null;
        this.#clientes.forEach(clienteBanco => {
            if(clienteBanco.getNombre() == nCliente){
                cliente = clienteBanco;
            }else if(clienteBanco.getNombre == nClienteTransferido){
                clienteTransferido = clienteBanco;
            }
        });

        if(cliente && clienteTransferido){
            if(cliente.getSaldo() >= saldo){
                cliente.setSaldo(cliente.getSaldo() - saldo);
                clienteTransferido.setSaldo(clienteTransferido.getSaldo() + saldo);
                console.log("Transferencia realizada con éxito");
            }else{
                console.log("No hay suficiente saldo");
            }
        }else{
            console.log("No se encontró el cliente");
        }
    }
    
}

let banco = new Banco("Banco XYZ");
let cliente = new Cliente("Sebastian",300)
let cliente2 = new Cliente("Juan",100)
banco.agregarCliente(cliente)
banco.agregarCliente(cliente2)

banco.mostrarClientes();

banco.mostrarSaldoTotal();

banco.transferenciasClientes("Sebastian","Juan",50);

banco.mostrarClientes();