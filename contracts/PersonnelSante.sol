

// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;


contract PersonnelSante {

    struct Fonctionnaire {
        uint256 idFonctionnaire;
        uint256 telephoneFonctionnaire;
        string roleFonctionnaire;
        string nomFonctionnaire;
        string prenomFonctionnaire;
        string addressFonctionnaire;
        string mailFonctionnaire;
        string passwordFonctionnaire;
        address createurFonctionnaire;
    }

    struct liste_Numero_Fonctionnaire{

    uint256 NumeroFonctionnaire;
    uint256 idFonctionnaire;

    }

    mapping(uint256 => Fonctionnaire) Fonctionnaire_Struct;
    mapping(uint256 => liste_Numero_Fonctionnaire) NumFonctionnaire;

    uint256[] public listPersonnel;

    uint256 public nombrePersonnels;
    uint256 public  currentIdFonctionnaire;

    function setNewFonctionnaire(
        uint256  _idFonctionnaire,
        string memory _roleFonctionnaire,
        string memory _nomFonctionnaire,
        string memory _prenomFonctionnaire,
        string memory _addressFonctionnaire,
        string memory _mailFonctionnaire,
        string memory _passwordFonctionnaire,
        uint256 _telephoneFonctionnaire,
        address _createurFonctionnaire
    ) public {
        nombrePersonnels = listPersonnel.length + 1;

        Fonctionnaire_Struct[_idFonctionnaire].idFonctionnaire = _idFonctionnaire;
        Fonctionnaire_Struct[_idFonctionnaire].roleFonctionnaire = _roleFonctionnaire;
        Fonctionnaire_Struct[_idFonctionnaire].nomFonctionnaire = _nomFonctionnaire;
        Fonctionnaire_Struct[_idFonctionnaire].prenomFonctionnaire = _prenomFonctionnaire;
        Fonctionnaire_Struct[_idFonctionnaire].addressFonctionnaire = _addressFonctionnaire;
        Fonctionnaire_Struct[_idFonctionnaire].telephoneFonctionnaire = _telephoneFonctionnaire;
        Fonctionnaire_Struct[_idFonctionnaire].mailFonctionnaire = _mailFonctionnaire;
        Fonctionnaire_Struct[_idFonctionnaire].passwordFonctionnaire = _passwordFonctionnaire;
        Fonctionnaire_Struct[_idFonctionnaire].createurFonctionnaire = _createurFonctionnaire;

        NumFonctionnaire[nombrePersonnels].NumeroFonctionnaire = nombrePersonnels;
        NumFonctionnaire[nombrePersonnels].idFonctionnaire = _idFonctionnaire;


        listPersonnel.push(_idFonctionnaire);
    }



    function getNombrePersonnels() public view returns (uint256 ) {
        return nombrePersonnels;
    }

    function getAllid() public view returns (uint256[] memory) {
        return listPersonnel;
    }

            //////////************ROLE ************\\\\\\\\\\
    function getRoleFonctionnaire(uint256  idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.roleFonctionnaire;
    }

     function setRoleFonctionnaire(uint256  idPersonnel,string memory _roleFonctionnaire)
        public
        returns (string memory)
    {
        Fonctionnaire_Struct[idPersonnel].roleFonctionnaire = _roleFonctionnaire;
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.roleFonctionnaire;
    }

            //////////************NOM ************\\\\\\\\\\

    function getNomFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.nomFonctionnaire;
    }

     function setNomFonctionnaire(uint256 idPersonnel,string memory _nomFonctionnaire)
        public
        returns (string memory)
    {
        Fonctionnaire_Struct[idPersonnel].nomFonctionnaire = _nomFonctionnaire;

        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.nomFonctionnaire;
    }


            //////////************PRENOM ************\\\\\\\\\\
    function getPrenomFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.prenomFonctionnaire;
    }

    function setPrenomFonctionnaire(uint256 idPersonnel,string memory _prenomFonctionnaire)
        public
        returns (string memory)
    {
        Fonctionnaire_Struct[idPersonnel].prenomFonctionnaire = _prenomFonctionnaire;

        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.prenomFonctionnaire;
    }


            //////////************TELEPHONE ************\\\\\\\\\\

    function getTelephoneFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (uint256)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.telephoneFonctionnaire;
    }

    function SetTelephoneFonctionnaire(uint256 idPersonnel,uint256 _telephoneFonctionnaire)
        public
        returns (uint256)
    {
        Fonctionnaire_Struct[idPersonnel].telephoneFonctionnaire = _telephoneFonctionnaire;

        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.telephoneFonctionnaire;
    }

            //////////************ADDRESS ************\\\\\\\\\\

    function getAddressFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.addressFonctionnaire;
    }



    function setAddressFonctionnaire(uint256 idPersonnel,string memory _addressFonctionnaire)
        public
        returns (string memory)
    {
        Fonctionnaire_Struct[idPersonnel].addressFonctionnaire = _addressFonctionnaire;

        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.addressFonctionnaire;
    }

            //////////************EMAIL ************\\\\\\\\\\

    function getMailFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.mailFonctionnaire;
    }

    function setMailFonctionnaire(uint256 idPersonnel,string memory _mailFonctionnaire)
        public
        returns (string memory)
    {
        Fonctionnaire_Struct[idPersonnel].mailFonctionnaire = _mailFonctionnaire;

        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.mailFonctionnaire;
    }
            //////////************PASSWORD ************\\\\\\\\\\

     function getPasswordFonctionnaire(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.passwordFonctionnaire;
    }

    function setPasswordFonctionnaire(uint256 idPersonnel,string memory _passwordFonctionnaire)
        public
        returns (string memory)
    {
        Fonctionnaire_Struct[idPersonnel].passwordFonctionnaire = _passwordFonctionnaire;

        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.passwordFonctionnaire;
    }

            //////////************CREATEUR ************\\\\\\\\\\

    function getCreateurFonnctionnaire(uint256  idPersonnel) public view returns (address )
     {
        Fonctionnaire storage tmp = Fonctionnaire_Struct[idPersonnel];
        return tmp.createurFonctionnaire;
    }
}
