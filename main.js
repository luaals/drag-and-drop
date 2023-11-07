
    function allowDrop(ev){
        ev.preventDefault();
    }

    function drag1(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drag2(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drag3(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drag4(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drag5(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drag6(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

        function drop1(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }

        function drop2(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }

        function drop3(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }

        function drop4(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }


        function drop5(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }

        function drop6(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
