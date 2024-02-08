# Description: The file processes talks.json

import json

def filter_talks_by_tag(tag:str, talks:list) -> list:
    """
    Filter talks by tag
    """
    return [talk for talk in talks if tag in talk['tags']]

def prettyprint_talks(talks:list) -> None:
    """
    Pretty print talks: title - (tags)
    """
    for talk in talks:
        print(f"{talk['title']} - ({', '.join(talk['tags'])})")

# Read the json file
with open('talks.json') as f:
    talks:list = json.load(f)

python_talks = filter_talks_by_tag('python', talks)
print(python_talks)


