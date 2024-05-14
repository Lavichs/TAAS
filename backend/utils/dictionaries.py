def check_required_fields(data, required_fields):
    missing_fields = [field for field in required_fields if field not in data]
    return missing_fields


# # Пример данных и списка обязательных полей
# data = {
#     'country': 'USA',
#     'city1': 'New York',
#     'date1': '2024-05-06',
#     'description': 'Exciting tour',
# }
#
# required_fields = ['country', 'city1', 'date1', 'description', 'price']
# missing_fields = check_required_fields(data, required_fields)
# print(missing_fields)
#
# required_fields = ['country', 'city1', 'date1', 'description']
# missing_fields = check_required_fields(data, required_fields)
# print(missing_fields)
#
# required_fields = ['country', 'city1', 'date1']
# missing_fields = check_required_fields(data, required_fields)
# print(bool(missing_fields))


