const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json()); //middleware para utilizacao de json nas requisições

app.use(routes);
/**
 * Metodos Http:
 *
 * GET: Buscar uma informação no backend
 * POST: criar uma informacao no backend
 * PUT: alterar uma informação
 * DELETE: deletar uma informação
 */

/**
 * Tipos de Parâmetros
 * Query Parms: vai na url da pagina (QueryString) depois de ? e entre & (filtros e paginação)
 *   para pegar essa variavel eu pego via parametro request dentro da rota
 *     ex: const parametros = request.query;
 * Route Parms: Usados para identificar um único recurso (o que eu quero)
 *   deve ser declarado na rota que ele é esperado
 *   ex: no scopo da rota
 *         app.get('users/:id'), (request, response) => {
 *              const parametro = request.params
 *         }
 * Request Body: é o copro da requisicao é usado para criar ou alterar dados dos recursos
 *   ex: no scopo da rota
 *         app.get('users/'), (request, response) => {
 *              const parametro = request.body
 *         }
 */

/**
 * Banco usado será SQLite
 *
 * Pode ser acessado via:
 * Driver: Aí o acesso a banco será via Select * from users
 * Query Builder: (via javascript) table('users') .select('*').where()
 *       Esse é o que será usado (e o query buildes usado será o KNEX.JS)
 */

app.listen(6969);
