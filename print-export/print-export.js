app.controller('printExportCtrl', function ($scope) {
    var map = L.map('map').setView([20.5937, 78.9629], 5);

    var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    $scope.changeOrientation = function (orientationParam) {
        $scope.orientation = orientationParam
    }

    $scope.ChangePageLayout = function (layoutParam) {
        $scope.page = layoutParam
    }

    $scope.exportImage = function (layout, orientation) {
        L.easyPrint({
            hidden: true,
            sizeModes: [layout + orientation],
            tileLayer: tileLayer,
            exportOnly: true
        }).addTo(map).printMap(layout + orientation + ' ' + 'page', 'MyFileName')
    }

    $scope.printMyMap = function (layout, orientation) {


        var _print = L.control.browserPrint({
            title: 'Just print me!',
            printModes: [
                // L.control.browserPrint.mode(orientation,orientation+'-'+layout,layout,'',false)
                L.control.browserPrint.mode.landscape(),
                L.control.browserPrint.mode.portrait()
            ],
            manualMode: false
        });

        _print.addTo(map);

        for (var i = 0; i < _print.options.printModes.length; i++) {
            if (_print.options.printModes[i].Mode == orientation) {
                _print.options.printModes[i].PageSize = layout;
                _print.options.printModes[i].PageSeries = layout[0];
                _print.options.printModes[i].PageSeriesSize = layout[1];
                console.log(_print.options.printModes[i])
            }
        }
        _print.print(orientation)


        // L.easyPrint({
        //     hidden: true,
        //     sizeModes: [layout + orientation],
        //     tileLayer: tileLayer
        // }).addTo(map).printMap(layout + orientation + ' ' + 'page', 'MyFileName')


        //     L.control.browserPrint({
        //         title: 'Just print me!',
        //         // printLayer: tileLayer,
        //         closePopupsOnPrint: false,
        //         printModes: [
        //             L.control.browserPrint.mode(orientation,orientation+'-'+layout,layout) 
        //         ],
        //         manualMode: false

        // }).addTo(map)

    }

})
