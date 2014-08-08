function Almuerzo($scope) {

    $scope.comidas = [
        {"name": "Sandwich de Bondiola", "cost": 113.25},
        {"name": "Gaseosa", "cost": 25}
    ];

    $scope.costoTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.comidas.length; i++) {
            total += $scope.comidas[i].cost;
        }
        return total;
    }

    $scope.masComida = function () {
        $scope.comidas.push({
            "name": "Comida",
            "cost": 0,
        });
    }

    $scope.menosComida = function (index) {
        $scope.comidas.splice(index, 1);
    }

    $scope.comensales = [
        {"name": "Elías", "paid": 100, "comidas": {}},
        {"name": "Julián", "paid": 50, "comidas": {}},
        {"name": "idacal", "paid": 0, "comidas": {}},
    ];

    $scope.precioPorPera = function(index) {
        var comida = $scope.comidas[index];
        var nComensales = 0;
        for (var i = 0; i < $scope.comensales.length; i++ ) {
            if ($scope.comensales[i].comidas[comida.name])
                nComensales++;
        }
        return comida.cost / nComensales;
    }

    $scope.aPagar = function(index) {
        var comensal = $scope.comensales[index];
        var total = 0;
        for (var i = 0; i < $scope.comidas.length; i++ ) {
            if (comensal.comidas[$scope.comidas[i].name])
                total += $scope.precioPorPera(i);
        }
        return total;
    }

    $scope.masComensales = function () {
        $scope.comensales.push({
            "name": "Juan",
            "paid": 0,
            "comidas": {}
        });
    }

    $scope.menosComensales = function (index) {
        $scope.comensales.splice(index, 1);
    }


}

