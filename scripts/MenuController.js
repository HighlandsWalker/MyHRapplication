app.controller('MenuController', ['$scope', function($scope){
    $scope.employeesList = [
        {
            firstName: 'Renly',
            lastName: 'Baratheon',
            url: "employees/RenlyBaratheon.html"
        },
        {
            firstName: 'John',
            lastName: 'Wick',
            url: "employees/JohnWick.html"
        }
    ];
}
]);