

nodes = "p div a span nav section h1 h2 h3 h4 h5 h6 li ul input form table tr td button"

for node in nodes.split():
    print(f"""function {node}(attrs, children) {{
    return node("{node}", attrs, children);
}}
""")