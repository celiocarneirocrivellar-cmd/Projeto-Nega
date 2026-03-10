// model do pedido

class order {
  constructor(id, usuarioId, produtos, total, status, dataCriacao) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.produtos = produtos; // array de {produtoId, quantidade}
    this.total = total;
    this.status = status; // 'pendente', 'pago', 'enviado', 'entregue'
    this.dataCriacao = dataCriacao;
  }
}
module.exports = order;