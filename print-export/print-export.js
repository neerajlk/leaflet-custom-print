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

    $scope.printMyMap = function (layout, orientation) {


        var _print = L.control.browserPrint({
            title: 'Just print me!',
            printModes: [
                L.control.browserPrint.mode.landscape('Landscape Print', layout),
                L.control.browserPrint.mode.portrait('portrait Print', layout),
            ],
            manualMode: true
        });

        _print.addTo(map);

        for (var i = 0; i < _print.options.printModes.length; i++) {
            if (_print.options.printModes[i].Mode == orientation) {
                _print.options.printModes[i].PageSize = layout;
                _print.options.printModes[i].PageSeries = layout[0];
                _print.options.printModes[i].PageSeriesSize = layout[1];
            }
        }
        _print.print(orientation)
    }



    var greenIcon = L.icon({
        iconUrl: './print-export/hexagon_filled_green.png',
    });



    var locations = [
        ["Delhi, the National Capital Territory of Delhi, India", 28.610001, 77.230003],
        ["Mumbai, Maharashtra, India", 19.076090, 72.877426],
        ["Thiruvalla, Kerala, India", 9.383452, 76.574059],
        ["Karaikal, Puducherry, India", 10.925440, 79.838005],
        ["Belgaum, Karnataka, India", 15.852792, 74.498703],
        ["Suri, West Bengal, India", 23.905445, 87.524620],
        ["Bhubaneswar, Odisha, India", 20.296059, 85.824539],
        ["Barh, Bihar, India", 25.477585, 85.709091],
        ["Kollam, Kerala, India", 8.893212, 76.614143],
        ["Mettur, Tamil Nadu, India", 11.786253, 77.800781],
        ["Orai, Uttar Pradesh, India", 25.989836, 79.450035],
        ["Surajpur, Chhattisgarh, India", 23.223047, 82.870560],
        ["Malerkotla, Punjab, India", 30.525005, 75.890121],
        ["Jorapokhar, Jharkhand, India", 22.422455, 85.760651],
        ["Vizianagaram, Andhra Pradesh, India", 18.106659, 83.395554],
        ["Durg, Chhattisgarh, India", 21.190449, 81.284920],
        ["Himmatnagar, Gujarat, India", 23.597969, 72.969818],
        ["Sambhal, Uttar Pradesh, India", 28.590361, 78.571762],
        ["Harnaut, Bihar, India", 25.369179, 85.530060],
        ["Port Blair, Andaman and Nicobar Islands, India", 11.623377, 92.726486]
    ]

    for (var i = 0; i < locations.length; i++) {
        marker = new L.marker([locations[i][1], locations[i][2]], { icon: greenIcon })
            .bindPopup(locations[i][0])
            .addTo(map);
    }

    $scope.activeLayers = [{
        type: "point",
        color: "green",
        name: "Cities in India",
        symbol_url: '/print-export/hexagon_filled_green.png'
    }]

    $scope.title = 'This is a Title';
    $scope.comment = 'This is a Comment'

})
