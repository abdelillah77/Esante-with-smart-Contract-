

// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;


contract Malade {

    struct block_Malade {
        uint256 idMalade;
        uint256 telephoneMalade;
        string nomMalade;
        string prenomMalade;
        string sexeMalade;
        string addressMalade;
        string mailMalade;
        string passwordMalade;
        address createurMalade;
    }

    struct liste_access_chaque_Malade{

    string mailMalade;
    address[] Personnes_on_accees;

    }


    mapping(string => block_Malade) Malade_Struct;

    mapping(uint256 => liste_access_chaque_Malade) Access;

    uint256[] public listMalade;
    uint256 public nombreMalade;
    string public currentEmail;



    function setNewMalade(
        string memory _nomMalade,
        string memory _prenomMalade,
        string memory _addressMalade,
        string memory _sexeMalade,
        uint256 _telephoneMalade,
        string memory _mailMalade,
        string memory _passwordMalade,
        address _createur
    ) public {

        nombreMalade = listMalade.length + 1;

        Malade_Struct[_mailMalade].idMalade = nombreMalade;
        Malade_Struct[_mailMalade].nomMalade = _nomMalade;
        Malade_Struct[_mailMalade].prenomMalade = _prenomMalade;
        Malade_Struct[_mailMalade].sexeMalade = _sexeMalade;
        Malade_Struct[_mailMalade].addressMalade = _addressMalade;
        Malade_Struct[_mailMalade].telephoneMalade = _telephoneMalade;
        Malade_Struct[_mailMalade].mailMalade = _mailMalade;
        Malade_Struct[_mailMalade].passwordMalade = _passwordMalade;
        Malade_Struct[_mailMalade].createurMalade = _createur;

        Access[nombreMalade].mailMalade = _mailMalade;
        Access[nombreMalade].Personnes_on_accees.push(_createur);

        listMalade.push(nombreMalade);
    }



     function AddNewAcces(string memory _mailMalade,address adFonctionnaire) public{
        block_Malade storage tmp = Malade_Struct[_mailMalade];

       Access[tmp.idMalade].Personnes_on_accees.push(adFonctionnaire);
    }

    function getPersonneOntAcces(string memory _mailMalade) public view returns (address[] memory){

       block_Malade storage tmp = Malade_Struct[_mailMalade];

       liste_access_chaque_Malade storage tmpAccess = Access[tmp.idMalade];

        return tmpAccess.Personnes_on_accees;
    }


    //////////************Recuperer la liste des malades qui peut le personnel x l'accède  ************\\\\\\\\\\

    function getIdMaladeWhoPersonnelHaveAccess(address addressPersonnel) public view returns (string[] memory)
    {
        liste_access_chaque_Malade memory tmp;
        string[] memory  idByAddress;

       for(uint256 i = 0 ; i < nombreMalade ; i++)
       {
           tmp = Access[i];
           for(uint256 j = 0 ; j < tmp.Personnes_on_accees.length ; j++)
           {
           if(tmp.Personnes_on_accees[j] == addressPersonnel){
                 idByAddress[idByAddress.length+1] = tmp.mailMalade;
           }
           }
       }

        return idByAddress;
    }


    function getNombreMalade() public view returns (uint256 ) {
        return nombreMalade;
    }

    function getAllid() public view returns (uint256[] memory) {
        return listMalade;
    }

    /////////////////////************NOM ************\\\\\\\\\\\\\\\\\\\\\\\\

    function getNomMalade(string memory  _mailMalade)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.nomMalade;
    }

    function setNomMalade(string memory _mailMalade,string memory newNom)
        public
        returns (string memory)
    {
        Malade_Struct[_mailMalade].nomMalade = newNom;
        block_Malade storage tmp = Malade_Struct[_mailMalade];

        return tmp.nomMalade;
    }
    /////////////////////////************PRENOM ************\\\\\\\\\\\\\\\\\\\\\\\\

    function getPrenomMalade(string memory _mailMalade)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.prenomMalade;
    }


    function setPrenomMalade(string memory _mailMalade,string memory newPrenom)
        public
        returns (string memory)
    {
        Malade_Struct[_mailMalade].prenomMalade = newPrenom;

        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.prenomMalade;
    }

    ////////////////////************TELEPHONE ************\\\\\\\\\\\\\\\\\\\\\\\\\\\

    function getTelephoneMalade(string memory _mailMalade)
        public
        view
        returns (uint256)
    {
        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.telephoneMalade;
    }


    function setTelephoneMalade(string memory _mailMalade,uint256 newTel)
        public
        returns (uint256)
    {
        Malade_Struct[_mailMalade].telephoneMalade = newTel;

        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.telephoneMalade;
    }

    /////////////////////************ADDRESS ************\\\\\\\\\\\\\\\\\\\\\\\\\\

     function getAddressMalade(string memory _mailMalade)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.addressMalade;
    }

    function setAddressMalade(string memory _mailMalade,string memory newAddress)
        public
        returns (string memory)
    {
        Malade_Struct[_mailMalade].addressMalade = newAddress;

        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.addressMalade;
    }

    ///////////////////////************EMAIL ************\\\\\\\\\\\\\\\\\\\\\\\\\

    function getMailMalade(string memory _mailMalade)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.mailMalade;
    }

    function getMailById(uint256 idMalade)
        public
        view
        returns (string memory)
    {
        liste_access_chaque_Malade storage tmp = Access[idMalade];
        return tmp.mailMalade;
    }


    function setMailMalade(string memory _mailMalade,string memory newMail)
        public
        returns (string memory)
    {

        Malade_Struct[_mailMalade].mailMalade = newMail;

        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.mailMalade;
    }


    //////////////////////************PASSWORD ************\\\\\\\\\\\\\\\\\\\\\\\\\\

     function getPasswordMalade(string memory _mailMalade)
        public
        view
        returns (string memory)
    {
        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.passwordMalade;
    }

    function setPasswordMalade(string memory _mailMalade,string memory newPassword)
        public
        returns (string memory)
    {

        Malade_Struct[_mailMalade].passwordMalade = newPassword;

        block_Malade storage tmp = Malade_Struct[_mailMalade];
        return tmp.passwordMalade;
    }
}
