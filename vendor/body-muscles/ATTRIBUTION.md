# Muscle-map research notes

Sources reviewed on 2026-09-09:

- Strava Muscle Map for Strength Activities: https://support.strava.com/en-us/articles/15401529-muscle-map-for-strength-activities
  - Uses an anatomical figure with front/back views and selectable muscle regions.
  - Groups muscles into Arms, Shoulders, Chest, Back, Core, and Legs.
  - Shows trained muscles as highlighted regions; uses a side-by-side map in saved activity views.
  - Keeps muscle selection simple and legible rather than forcing dense labels onto the figure.

- Strong workout tracker: https://www.strong.app/
  - Emphasizes best sets, estimated 1RM, progress history, and clean low-friction tracking.
  - The relevant UI lesson is to pair an anatomical/heat-map view with concise strength metrics, not overload the figure with text.

- WeLift – Ranked Lifting: https://apps.apple.com/us/app/welift-ranked-lifting/id6449750649
  - Calculates estimated 1RM from logged weight/reps and updates rank immediately.
  - Uses exercise-specific ranking and progress charts; rankings are based on comparable body-weight/experience context.
  - For this single-user app, preserve the exercise-specific rank model without leaderboards or other-user content.

Implementation decision:
Use an Apache-2.0 open-source 70+ muscle SVG path dataset from https://github.com/vulovix/body-muscles, grouped into the app's nine body-part rank categories. Render front and back anatomies side by side, color each mapped region by the corresponding exercise-driven rank, and keep labels/metrics in cards below the figures.
