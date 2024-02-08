import datetime


def parse_expenses(expense_string):
  """Parse the list of expenses and return the list of triples (date, value, currency).
  Ignore lines starting with #.
  Parse the date usting datetime.
  """

  expenses = []
  for line in expense_string.splitlines():
    if line.strip().startswith('#'):
      continue
    date_str, value_str, currency = line.split()
    date = datetime.datetime.strptime(date_str, '%Y-%m-%d').date()
    value = float(value_str)
    expenses.append((date, value, currency))
  return expenses


