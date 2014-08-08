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
}
