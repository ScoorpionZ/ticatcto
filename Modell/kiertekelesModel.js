class Kiertekel{
    constructor(tomb){
        this.tomb=tomb;
        // console.log(tomb);
    }

    getVizszintes(){
        let ell="";
        this.tomb.forEach((element,index)=> {
            ell+=element.ertek;
            if(index%3===2){
                ell+="@";
            }
        });
        return ell;
    }
    getFuggoleges(){
        let elly="";
        for (let i = 0; i < 3; i++) {
            elly+=this.tomb[i].ertek+this.tomb[i+3].ertek+this.tomb[i+6].ertek;
            elly+="@";
        }
        return elly;
    }

    getAtlo(){
        let ell=this.tomb[0].ertek+this.tomb[4].ertek+this.tomb[8].ertek+"@";
        ell+=this.tomb[2].ertek+this.tomb[4].ertek+this.tomb[6].ertek+"@";
        return ell;
    }

    ellenorzes(){
        let ell=this.getVizszintes()+"@"+this.getAtlo()+"@"+this.getFuggoleges();
        let allapot="";
        if(ell.indexOf("XXX")>=0){
            allapot="X";
        }
        else if(ell.indexOf("OOO")>=0){
            allapot="O";
        }
        // console.log(ellX)
        return allapot;
    }
}