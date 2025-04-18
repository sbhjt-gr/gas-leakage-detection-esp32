# Gas Leakage Detection

This project provides a comprehensive solution for detecting gas leakage using an ESP32 microcontroller. It includes both hardware interfacing and a web application for monitoring and alerting purposes.

<img src="https://github.com/user-attachments/assets/88298577-4735-4810-af49-d0230701d626" alt="Image 7" width="275"/>
<img src="https://github.com/user-attachments/assets/19919d5d-5fd0-4d0d-9329-33cc2409d82e" alt="Image 8" width="300"/>
<img src="https://github.com/user-attachments/assets/440b24cc-dd1a-4303-bb53-c7387907eb1d" alt="Image 9" width="200"/>
<img src="https://github.com/user-attachments/assets/6602c089-73f5-4b8b-a690-aa1f8bbe9a71" alt="Image 10" width="150"/>


## Project Structure

- **ESP32/**: Contains the code for the ESP32 microcontroller.
  - `espnetwork.py`: Handles network-related functions for ESP32.
  - `main.py`: The main script that runs on the ESP32.
  - `sms.py`: Sends SMS alerts in case of gas leakage.
  - `socketapi.py`: Provides socket communication functionalities.

- **Gas_Leakage_Detection/**: The main directory for the web application.
  - `db.sqlite3`: SQLite database file.
  - **Gas_Leakage_Detection/**: Django project directory.
    - `__init__.py`
    - `asgi.py`
    - `settings.py`
    - `urls.py`
    - `views.py`
    - `wsgi.py`
  - `manage.py`: Django management script.
  - **pages/**: Contains HTML templates for the web application.
    - `footer.html`
    - `format.html`
    - `header.html`
    - `index.html`
    - `leakage_value.html`
    - `test.html`
  - **s-files/**: Static files for the web application.
    - `alert.mp3`: Audio alert for gas leakage.
    - **images/**: Contains images used in the web application.
      - `gas-icon.webp`
    - **lumx/**: LumX framework files.
      - `app.js`
      - `lumx.css`
      - `lumx.js`
      - `lumx.min.js`
      - **libs/**: Libraries used by LumX.
        - **angular/**
          - `angular.js`
        - **angular-highlightjs/**
          - `angular-highlightjs.min.js`
        - **angular-ui-router/**
          - `angular-ui-router.min.js`
        - **jquery/**
          - `jquery.js`
        - **moment/**
          - `moment-with-locales.js`
        - **velocity-animate/**
          - `velocity.js`

## How to Run

1. **ESP32 Setup:**
   - Flash the ESP32 with the code provided in the `ESP32` directory.
   - Ensure the ESP32 is connected to a network and configured to detect gas leakage.

2. **Web Application:**
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the Django server:
     ```bash
     python manage.py runserver
     ```
   - Access the web application at `http://127.0.0.1:8000/`.

3. **Database:**
   - The project uses an SQLite database (`db.sqlite3`).
   - If needed, migrate the database:
     ```bash
     python manage.py migrate
     ```

## Features

- **Real-time Gas Leakage Detection:** The ESP32 continuously monitors for gas leakage and sends alerts.
- **SMS Alerts:** Receive SMS notifications when gas leakage is detected.
- **Web Monitoring:** Monitor gas levels and receive alerts via the web application.
- **Audio Alerts:** The web application plays an audio alert (`alert.mp3`) when gas leakage is detected.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the creators of LumX for the frontend framework used in this project.

## Contact

For any inquiries & issues, please contact [Subhajit Gorai](mailto:sg_outlp@outlook.com). I will resolve it in the same day.
