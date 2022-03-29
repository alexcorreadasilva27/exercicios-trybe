# import pysql  # Encare essa lib como fictícia!


# class SqlConnector:
#     # ...

#     def __init__(self, address, port):
#         print(f"criada uma conexão em {address}:{port}")
#         self.db = pysql.connect(address, port)

#     def get_count(token):
#         query = f"SELECT count FROM access WHERE token={token};--"

#     def count_request(token):
#         query = f"UPDATE access SET count = count+=1 WHERE token={token};--"
#         self.db.execute(query)

# import pyredis  # Encare essa lib como fictícia também!


# class RedisConnector:
#     def __init__(self, address, port):
#         print(f"criada uma conexão em {address}:{port}")
#         self.db = pyredis.connect(address, port)

#     def get_count(token):
#         result = self.search(token)
#         amount = result.get("access_count", None)
#         return amount

#     def update_count(token):
#         amount = self.get_count()
#         if amount is None:
#             self.db.insert({token: 1})
#         else:
#             self.db.insert({token: amount + 1})

# from abc import ABC, abstractmethod

# class Connector(ABC):
#     @abstractmethod
#     def get_count(token):
#         pass

#     @abstractmethod
#     def count_request():
#         pass

# class RedisConnector(Connector):
#     def __init__(self, address, port):
#         # A lógica da conexão ao banco Redis

#     def get_count(token):
#         # A lógica de acesso ao banco Redis

#     def count_request(token):
#         # A lógica de acesso ao banco Redis

# class SqlConnector(Connector):
#     def __init__(self, address, port):
#         # A lógica da conexão ao banco SQL

#     def get_count(token):
#         # A lógica de acesso ao banco SQL

#     def count_request(token):
#         # A lógica de acesso ao banco SQL

# import analyzer

# # o parâmetro database é um connector
# def analyze_data(token, database, data):
#     try:
#         report = analyzer.complete_report(data)
#         database.count_request(token)  # Cliente receberá cobrança
#         return report

#     # Se a database não tiver o método count_request, vai lançar o erro
#     # AttributeError -- e a gente deixa o programa travar se isso acontecer.
#     except analyzer.InvalidDataException:
#         # A gente lida apenas com InvalidDataException, que é um erro
#         # esperado quando o relatório não estiver pronto.
#         return  # Cliente não receberá cobrança, pois não geramos o relatório
