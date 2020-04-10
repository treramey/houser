create table houses (
    id serial primary key,
    name varchar(100) not null,
    address varchar(100) not null,
    city text not null,
    state text not null,
    zipcode integer not null 
)