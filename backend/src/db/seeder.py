import datetime
import uuid

from app import create_app
from src.db.Models import db, Employee, Contact, Client, TourOperator, Tour, Booking


def EmployeeFactory():
    employee1 = Employee(id=uuid.uuid4(),
                         name='Дарья',
                         surname='Фролова',
                         patronymic='Прокофьевна',
                         login='Frolova',
                         post='кассир',
                         tel_number='+79384967024',
                         encrypted_password='sr45Jdf')
    employee2 = Employee(id=uuid.uuid4(),
                         name='Аркадий',
                         surname='Петров',
                         patronymic='Валентинович',
                         login='Petrov',
                         post='менеджер',
                         tel_number='+79384967324',
                         encrypted_password='JHuF5fg')
    admin = Employee(id=uuid.uuid4(),
                     name='admin',
                     surname='admin',
                     patronymic='admin',
                     login='admin',
                     post='admin',
                     tel_number='',
                     encrypted_password='123')
    db.session.add(employee1)
    db.session.add(employee2)
    db.session.add(admin)


def ContactFactory():
    contact1 = Contact(id=uuid.uuid4(),
                       email='bouzuppossihe-1464@yopmail.com',
                       tel_number='+79014971169', )
    contact2 = Contact(id=uuid.uuid4(),
                       email='grigoiddafrure-1984@yopmail.com',
                       tel_number='+79218050779', )
    contact3 = Contact(id=uuid.uuid4(),
                       email='fevoikeddedde-9176@yopmail.com',
                       tel_number='+79018191857', )
    contact4 = Contact(id=uuid.uuid4(),
                       email='groilauhoppudu-3579@yopmail.com',
                       tel_number='++79942791097', )
    contact5 = Contact(id=uuid.uuid4(),
                       email='coutacijotta-7487@yopmail.com',
                       tel_number='+79922250525', )
    contact6 = Contact(id=uuid.uuid4(),
                       email='keudovularoi-7599@yopmail.com',
                       tel_number='+77025308604', )
    db.session.add(contact1)
    db.session.add(contact2)
    db.session.add(contact3)
    db.session.add(contact4)
    db.session.add(contact5)
    db.session.add(contact6)


def ClientFactory():
    client1 = Client(id=uuid.uuid4(),
                     name='Анастасия',
                     surname='Матвиенко',
                     patronymic='Арнольдовна',
                     pasport_series='465',
                     pasport_number='207231',
                     contactID=Contact.query.order_by(db.func.random()).first().id)
    client2 = Client(id=uuid.uuid4(),
                     name='Петр',
                     surname='Устинов',
                     patronymic='Алексеевич',
                     pasport_series='385',
                     pasport_number='894353',
                     contactID=Contact.query.order_by(db.func.random()).first().id)
    client3 = Client(id=uuid.uuid4(),
                     name='Вышеслав',
                     surname='Овчинников',
                     patronymic='Ермолаевич',
                     pasport_series='585',
                     pasport_number='535690',
                     contactID=Contact.query.order_by(db.func.random()).first().id)
    client4 = Client(id=uuid.uuid4(),
                     name='Ангелина',
                     surname='Симонова',
                     patronymic='Дмитриевна',
                     pasport_series='261',
                     pasport_number='522907',
                     contactID=Contact.query.order_by(db.func.random()).first().id)
    db.session.add(client1)
    db.session.add(client2)
    db.session.add(client3)
    db.session.add(client4)


def TourOperatorFactory():
    TO1 = TourOperator(id=uuid.uuid4(),
                       title='Гала-Форм',
                       contactID=Contact.query.order_by(db.func.random()).first().id,
                       contract_number='1345')
    TO2 = TourOperator(id=uuid.uuid4(),
                       title='НПО «Артемьев Колобова»',
                       contactID=Contact.query.order_by(db.func.random()).first().id,
                       contract_number='1346')
    db.session.add(TO1)
    db.session.add(TO2)


def TourFactory():
    tour1 = Tour(id=uuid.uuid4(),
                 country_stay='Турция',
                 city_departure='Москва',
                 city_stay='Анталья',
                 date_departure=datetime.datetime(2024, 5, 19),
                 date_return=datetime.datetime(2024, 5, 25),
                 description='''
🌟 Добро пожаловать в удивительный город Анталья!
Анталья – это жемчужина Турции, знаменитая своими пляжами, историей и культурой. В этом удивительном городе сочетается древнее наследие и современные удобства.
🌊 Приезжайте насладиться теплым средиземноморским климатом и погрузиться в бирюзовые воды моря. Пляжи Антальи просто восхитительны! ☀️
🏰 Для любителей истории Анталья предлагает посетить древний город с крепостью Хадриана, а также множество музеев, где можно узнать больше о богатом культурном наследии региона.
🍽️ Гурманы будут в восторге от разнообразия турецкой кухни: от вкуснейших мезе до ароматного турецкого кофе.
🛍️ Любителям шопинга придутся по вкусу местные базары, где можно купить традиционные товары и сувениры.
Не упустите возможность познакомиться с гостеприимством и красотой Антальи! 🌺🌴✨
''',
                 price='55000',
                 idTourOperator=TourOperator.query.order_by(db.func.random()).first().id,
                 isDelete=False)
    tour2 = Tour(id=uuid.uuid4(),
                 country_stay='Китай',
                 city_departure='Екатеринбург',
                 city_stay='Шанхай',
                 date_departure=datetime.datetime(2024, 5, 26),
                 date_return=datetime.datetime(2024, 5, 30),
                 description='''
🎉 Добро пожаловать в удивительный город Шанхай! 🇨🇳
Шанхай — это культурная столица Китая, сочетающая в себе современные небоскребы и исторические достопримечательности.
🌆 Посетите невероятные небоскребы на набережной Бунд, откуда открывается потрясающий вид на современный центр города. Роскошные небоскребы создают захватывающий контраст с традиционными китайскими садами и храмами.
🎎 Отправьтесь в старый город и окунитесь в атмосферу древних китайских улиц с традиционными китайскими домами, ресторанами и магазинами. Посетите Город богов, где можно ощутить дух старины и загадочности.
🥢 Не упустите возможность попробовать разнообразные китайские блюда – от изысканных деликатесов до уличной еды. Шанхай славится своими ресторанами и кафе, где можно отведать аутентичные китайские вкусы.
🛍️ Любители шопинга найдут в Шанхае множество возможностей для приобретения сувениров, современной модной одежды, украшений и других товаров.
🏙️ Почувствуйте дыхание востока и запада в этом удивительном городе, который сочетает в себе традиции и современность! 🏮🌸🏙️
''',
                 price='48700',
                 idTourOperator=TourOperator.query.order_by(db.func.random()).first().id,
                 isDelete=False)
    tour3 = Tour(id=uuid.uuid4(),
                 country_stay='Корея',
                 city_departure='Москва',
                 city_stay='Сеул',
                 date_departure=datetime.datetime(2024, 6, 7),
                 date_return=datetime.datetime(2024, 6, 11),
                 description='''
🎊 Добро пожаловать в захватывающий город Сеул! 🇰🇷
Сеул – это пульсирующая столица Южной Кореи, где современные технологии соседствуют с богатой культурой и историей.
🏰 Посетите исторические дворцы Гёнбокгун, Чандоккун и Чангдоккун, где можно погрузиться в древние корейские традиции и архитектуру.
🌸 Отправьтесь в парк Намсан и поднимитесь на башню Намсан, чтобы насладиться потрясающим видом на город. Это одно из самых романтичных мест в Сеуле!
🍜 Не пропустите возможность попробовать изысканные корейские блюда, такие как самгётан (куриный суп с рисом), бибимбап и корейский барбекю. Корейская кухня порадует даже самых взыскательных гурманов!
🛍️ Шопоголикам стоит посетить множество бутиков, улицу Мёндонг и рынок Дондаемун, где можно найти уникальные товары, модные вещи и сувениры.
🎶 Сеул живет днем и ночью, предлагая разнообразные развлечения – от модных клубов и баров до традиционного корейского театра и концертных залов.
Откройте для себя захватывающую атмосферу Сеула, города конрастов и невероятных впечатлений! 🌆🎋🎉
''',
                 price='60000',
                 idTourOperator=TourOperator.query.order_by(db.func.random()).first().id,
                 isDelete=False)
    db.session.add(tour1)
    db.session.add(tour2)
    db.session.add(tour3)


def BookingFactory():
    t = Tour.query.order_by(db.func.random()).first()
    booking1 = Booking(id=uuid.uuid4(),
                       idClient=Client.query.order_by(db.func.random()).first().id,
                       idTour=t.id,
                       idEmployee=Employee.query.order_by(db.func.random()).first().id,
                       status='оплачено',
                       pay_method='наличный',
                       cost=t.price,
                       date_pay=datetime.datetime(2024, 5, 1))
    t = Tour.query.order_by(db.func.random()).first()
    booking2 = Booking(id=uuid.uuid4(),
                       idClient=Client.query.order_by(db.func.random()).first().id,
                       idTour=t.id,
                       idEmployee=Employee.query.order_by(db.func.random()).first().id,
                       status='не оплачено',
                       pay_method='-',
                       cost=t.price)
    t = Tour.query.order_by(db.func.random()).first()
    booking3 = Booking(id=uuid.uuid4(),
                       idClient=Client.query.order_by(db.func.random()).first().id,
                       idTour=t.id,
                       idEmployee=Employee.query.order_by(db.func.random()).first().id,
                       status='оплачено',
                       pay_method='безналичный',
                       cost=t.price,
                       date_pay=datetime.datetime(2024, 5, 1))
    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)


def seed_data():
    with create_app().app_context():
        EmployeeFactory()
        ContactFactory()
        ClientFactory()
        TourOperatorFactory()
        TourFactory()
        BookingFactory()

        db.session.commit()


if __name__ == '__main__':
    seed_data()
