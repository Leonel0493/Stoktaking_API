create database Common

use Common

/**** tables for locations ****/
create table Countries(
	idCountry int not null auto_increment,
  Country varchar(100) not null,
  PhoneCode int not null,
  Flag blob null,
  CreatedBy varchar(25) not null,
  CreatedDate datetime not null default current_timestamp,
  ModifiedBy varchar(25) null,
  ModifedDate datetime null on update current_timestamp,
  Enabled bool default 1,
  primary key(idCountry)
);

create table Provinces(
	idProvince int not null auto_increment,
  Province varchar(100) not null,
  idCountry int not null,
  CreatedBy varchar(25) not null,
  CreatedDate datetime not null default current_timestamp,
  ModifiedBy varchar(25) null,
  ModifedDate datetime null on update current_timestamp,
  Enabled bool default 1,
  primary key(idProvince),
  constraint fk_province_country foreign key (idCountry) references Countries(idCountry)
);

create table Cities(
	idCity int not null auto_increment,
  City varchar(100) not null,
  idProvince int not null,
  CreatedBy varchar(25) not null,
  CreatedDate datetime not null default current_timestamp,
  ModifiedBy varchar(25) null,
  ModifedDate datetime null on update current_timestamp,
  Enabled bool default 1,
  primary key(idCity),
  constraint fk_city_province foreign key (idProvince) references Provinces(idProvince)
);

/**** tables for people ****/
create table Genders(
	idGender int not null auto_increment,
  Gender varchar(45) not null,
  Description varchar(200) null,
  CreatedBy varchar(25) not null,
  CreatedDate datetime not null default current_timestamp,
  ModifiedBy varchar(25) null,
  ModifedDate datetime null on update current_timestamp,
  Enabled bool default 1,
  primary key(idGender)
);

create table ContactTypes(
	idContactType int not null auto_increment,
  ContactType varchar(45) not null,
  Pattern varchar(150) null,
  CreatedBy varchar(25) not null,
  CreatedDate datetime not null default current_timestamp,
  ModifiedBy varchar(25) null,
  ModifedDate datetime null on update current_timestamp,
  Enabled bool default 1,
  primary key(idContactType)
);

create table DocumentsTypes(
	idDocumentType int not null auto_increment,
  DocumentType varchar(45) not null,
  Pattern varchar(150) null,
  CreatedBy varchar(25) not null,
  CreatedDate datetime not null default current_timestamp,
  ModifiedBy varchar(25) null,
  ModifedDate datetime null on update current_timestamp,
  Enabled bool default 1,
  primary key(idDocumentType)
);