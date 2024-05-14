from src.init import create_app

app = create_app()
app.config['JSON_AS_ASCII'] = False

if __name__ == "__main__":
    app.run()



