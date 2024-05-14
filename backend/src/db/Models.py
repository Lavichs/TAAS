from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Base(db.Model):
    __abstract__ = True

    id = db.Column(db.Uuid, primary_key=True)
    isDelete = db.Column(db.Boolean, default=False)


class Employee(Base):
    __tablename__ = 'Employee'

    name = db.Column(db.String, nullable=False)
    surname = db.Column(db.String, nullable=False)
    patronymic = db.Column(db.String)
    login = db.Column(db.String, nullable=False)
    post = db.Column(db.String, nullable=False)
    tel_number = db.Column(db.String, nullable=False)
    encrypted_password = db.Column(db.String, nullable=False)


class Contact(Base):
    __tablename__ = 'Contact'

    email = db.Column(db.String, nullable=False)
    tel_number = db.Column(db.String, nullable=False)


class Client(Base):
    __tablename__ = 'Client'

    name = db.Column(db.String, nullable=False)
    surname = db.Column(db.String, nullable=False)
    patronymic = db.Column(db.String)

    pasport_series = db.Column(db.String, nullable=False)
    pasport_number = db.Column(db.String, nullable=False)
    contactID = db.Column(db.Uuid, db.ForeignKey("Contact.id", ondelete='CASCADE'), nullable=False)


class TourOperator(Base):
    __tablename__ = 'TourOperator'

    title = db.Column(db.String, nullable=False)
    contactID = db.Column(db.Uuid, db.ForeignKey("Contact.id"), nullable=False)
    contract_number = db.Column(db.String, nullable=False)


class Tour(Base):
    __tablename__ = 'Tour'

    country_stay = db.Column(db.String, nullable=False)
    city_departure = db.Column(db.String, nullable=False)
    city_stay = db.Column(db.String, nullable=False)
    date_departure = db.Column(db.DateTime, nullable=False)
    date_return = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    idTourOperator = db.Column(db.Uuid, db.ForeignKey("TourOperator.id", ondelete='CASCADE'), nullable=False)


class SpecialOffer(Base):
    __tablename__ = 'SpecialOffer'

    dateBegin = db.Column(db.DateTime, nullable=False)
    dateEnd = db.Column(db.DateTime, nullable=False)
    discountPercentage = db.Column(db.Integer, nullable=False)


class Offer_Tour(Base):
    __tablename__ = 'Offer_Tour'

    idTour = db.Column(db.Uuid,
                       db.ForeignKey("Tour.id", ondelete='CASCADE', onupdate='NO ACTION'),
                       nullable=False)
    idOffer = db.Column(db.Uuid,
                        db.ForeignKey("SpecialOffer.id", ondelete='CASCADE', onupdate='NO ACTION'),
                        nullable=False)


class Booking(Base):
    __tablename__ = 'Booking'

    idClient = db.Column(db.Uuid,
                         db.ForeignKey("Client.id", ondelete='CASCADE', onupdate='NO ACTION'),
                         nullable=False)
    idTour = db.Column(db.Uuid,
                       db.ForeignKey("Tour.id", ondelete='CASCADE', onupdate='NO ACTION'),
                       nullable=False)
    idEmployee = db.Column(db.Uuid,
                           db.ForeignKey("Employee.id", ondelete='CASCADE', onupdate='NO ACTION'),
                           nullable=False)
    status = db.Column(db.String, nullable=False)
    pay_method = db.Column(db.String, nullable=False)
    cost = db.Column(db.Integer, nullable=False)
    date_pay = db.Column(db.DateTime, nullable=True)

