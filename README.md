# Kevin's Blog

- Github Pages base on Jekyll
- Init
    - `gem install jekyll bundle`
    - `jekyll new wkevin.github.io`
    - `cd wkevin.github.io`
    - modify `_config.yml`
    - `bundle exec jekyll serve`
- Adapte Github Pages
    - `vi _config.yml`:
        - 注释掉 `gem "jekyll"`
        - 打开 `gem "github-pages", group: :jekyll_plugins`
- Config theme
    - https://github.com/mmistakes/minimal-mistakes
        - Gemfile