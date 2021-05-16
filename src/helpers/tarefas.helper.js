module.exports = function(tarefas) {
    if (tarefas.length != 16) {
        return false;
    } 
    for (let tarefa of tarefas) {
        if (tarefa > 10 && tarefa < 0) {
            return false;
        }
    }
    return Array.isArray(tarefas);
};