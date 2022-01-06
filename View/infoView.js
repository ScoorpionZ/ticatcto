class InfoView{
    constructor(){
        this.jatekvegeElem=$(".jatekvege");
        this.kvetkezojatekos=$(".kovetkezojatekeos");
    }

    setJatekVege(ertek){
        this.jatekvegeElem.html(ertek);
    }

    setKovetkezoJatekos(ertek){
        this.kvetkezojatekos.html(ertek);
    }
}