//provalemnete nao sera usado no mobile
var getchances = function(team){
        return [(passProcess(team,-1,-1).chance * 100).toFixed(2),
                      (passProcess(team,0,-1).chance * 100).toFixed(2),
                      (passProcess(team,1,-1).chance * 100).toFixed(2),
                      (passProcess(team,-1,0).chance * 100).toFixed(2),
                      
                      (dibreProcess(team).chance * 100).toFixed(2),
                      
                      (passProcess(team,1,0).chance * 100).toFixed(2),
                      (passProcess(team,-1,1).chance * 100).toFixed(2),
                      (passProcess(team,0,1).chance * 100).toFixed(2),
                      (passProcess(team,1,1).chance * 100).toFixed(2),
                      
                      (shotProcess(team,-1,0).chance * 100).toFixed(2)
                      ]
    }


