from diagrams import Diagram
from diagrams.aws.integration import SQS
from diagrams.aws.compute import Lambda
from diagrams.aws.network import APIGateway
from diagrams.aws.database import RDS

with Diagram("Event Processing", show=False):
  apiGateway = APIGateway("entrypoint")
  queue = SQS("event queue")
  producerEvent = Lambda("producer")
  consumerEvent = Lambda("consumer")
  database = RDS("database")

  apiGateway >> producerEvent >> queue >> consumerEvent >> database