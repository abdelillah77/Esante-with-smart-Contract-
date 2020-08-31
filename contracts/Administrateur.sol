// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;


contract Administrateur {

    string idAdmin;
    string nomAdmin;
    string prenomAdmin;
    uint256 numeroTel;
    string mailAdmin;
    string password;

    //declaration de structure pour les roles
    struct role_Struct {
        string typeRole;
        string permission;
    }
    mapping(string => role_Struct) Role;

    string[] public listRole;


    function initAdministrateur(
        string memory _idAdmin,
        string memory _nomAdmin,
        string memory _prenomAdmin,
        uint256 _numeroTel,
        string memory _mailAdmin,
        string memory _password
    ) public {
        idAdmin = _idAdmin;
        nomAdmin = _nomAdmin;
        prenomAdmin = _prenomAdmin;
        numeroTel = _numeroTel;
        mailAdmin = _mailAdmin;
        password = _password;
    }

    function addRole(string memory nv_role, string memory _permission) public {

        Role[nv_role].typeRole = nv_role;
        Role[nv_role].permission = _permission;

        listRole.push(nv_role);
    }

    function getRolePermission(string memory _typerole)
        public
        view
        returns (string memory)
    {
        //cree une celle (struct) pour contenir le role stoqué dans la blockchain
        role_Struct storage tmp = Role[_typerole];

        return tmp.permission;
    }

    function getRoleType(string memory _typerole)
        public
        view
        returns (string memory)
    {
        //cree une celle (struct) pour contenir le role stoqué dans la blockchain
        role_Struct storage tmp = Role[_typerole];

        return tmp.typeRole;
    }

    function getAllRole() public view returns (string[] memory) {
            return listRole;
    }
     function changePassword(string memory newpassword) public    {
        //récupéré les nom de roles contenu dans le tableau listRole
        password = newpassword;
    }

    function changeNom(string memory newNom) public    {
        //récupéré les nom de roles contenu dans le tableau listRole
        nomAdmin = newNom;
    }

    function changePrenom(string memory newPrenom) public    {
        //récupéré les nom de roles contenu dans le tableau listRole
        prenomAdmin = newPrenom;
    }

    function changeEmail(string memory newEmail) public    {
        //récupéré les nom de roles contenu dans le tableau listRole
        mailAdmin = newEmail;
    }

    function changeTel(uint256 newTel) public    {
        //récupéré les nom de roles contenu dans le tableau listRole
        numeroTel = newTel;
    }
    function getIdAdmin( ) public view returns (string memory)
    {
        return idAdmin;
    }

    function getNomAdmin() public view returns (string memory)
    {
        return nomAdmin;
    }

    function getPrenomAdmin( ) public view returns (string memory)
    {
        return prenomAdmin;
    }


    function getTelephoneAdmin( ) public view returns (uint256)
    {
        return numeroTel;
    }


    function getMailAdmin() public view returns (string memory)
    {
        return mailAdmin;
    }

     function getPasswordMalade() public view returns (string memory)
    {
        return password;
    }
}
