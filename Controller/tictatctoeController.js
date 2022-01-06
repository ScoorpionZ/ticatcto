class TictactoeController{
    constructor(){
        const tomb=[];
        new Jatekter(tomb);
        this.info = new InfoView();
        const kiertekel = new Kiertekel(tomb);
        this.lepes=0;
        $(window).on("kivalaszt",(event)=>{
            // console.log(event.detail);
            let aktelem=event.detail;
            if(this.lepes%2===0){
                aktelem.setElem("X");
            }
            else{
                aktelem.setElem("O");
            }
            this.lepes++;
            //  console.log(kiertekel.ellenorzes());
             if(kiertekel.ellenorzes()==="X"){
                 this.info.setJatekVege("x NYERT");
                 this.info.setKovetkezoJatekos("VÉGE");
                 this.jatekVege(tomb);
             }
             else if(kiertekel.ellenorzes()==="O"){
                this.info.setJatekVege("O NYERT");
                this.info.setKovetkezoJatekos("VÉGE");
                this.jatekVege(tomb);
             }
             else if(this.lepes==9){
                this.info.setJatekVege("döntetlen");
                this.info.setKovetkezoJatekos("VÉGE");
             }
        });
    }

    jatekVege(tomb){
        this.info.setKovetkezoJatekos("VÉGE");
        tomb.forEach(element => {
            element.aktiv=false;
        });
    }
}