import { format } from 'date-fns';
import { useEffect, useLayoutEffect, useState } from 'react';
import classes from './App.module.css';
import ThemeToggle from './components/ThemeToggle';
import Link from './icons/Link';
import MapMarker from './icons/MapMarker';
import SearchIcon from './icons/Search';
import Twitter from './icons/Twitter';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>();
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [githubProfile, setGithubProfile] = useState<GithubUser>();

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <main className={classes.container}>
      <header className={classes.header}>
        <h1>devfinder</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>

      <form
        className={classes.searchForm}
        onSubmit={async (e) => {
          e.preventDefault();
          if (isSubmitting) return;

          try {
            setError(false);
            setSubmitting(true);

            const searchKeyword = e.currentTarget.elements.namedItem(
              'username'
            ) as HTMLInputElement;
            const response = await fetch(`https://api.github.com/users/${searchKeyword.value}`);

            if (response.status !== 200) {
              throw new Error('No results');
            }

            const data = (await response.json()) as GithubUser;
            setGithubProfile(data);
          } catch (e: any) {
            setError(e.message);
            setGithubProfile(undefined);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <label htmlFor="username" className="sr-only">
          Enter GitHub username
        </label>
        <SearchIcon className="text-primary text-2xl" />
        <input
          type="search"
          name="username"
          id="username"
          placeholder="Search GitHub username…"
          className={classes.searchInput}
          onChange={(e) => {
            if (e.target.value === '') setError(false);
          }}
        />
        <button type="submit" className={classes.searchFormButton} disabled={isSubmitting}>
          Search
        </button>
      </form>

      {error && (
        <p aria-live="assertive" className="text-error mr-2 md:mr-6">
          {error}
        </p>
      )}

      {githubProfile && (
        <div className={classes.userProfileCard} role="region">
          <div className="flex items-center space-x-5 md:space-x-10">
            <img
              src={githubProfile.avatar_url}
              alt={githubProfile.name}
              className="h-[4.375rem] w-[4.375rem] md:h-[7.3125rem] md:w-[7.3125rem] rounded-full"
            />
            <div>
              <h2 className="text-base md:text-[1.625rem] font-bold" aria-live="polite">
                {githubProfile.name}
              </h2>
              <p className="text-small md:text-base text-primary mt-px md:mt-1">
                @{githubProfile.login}
              </p>
              <p className="text-small md:text-body mt-[0.125rem] md:mt-1">
                Joined {format(new Date(githubProfile.created_at), 'dd MMM yyyy')}
              </p>
            </div>
          </div>

          {githubProfile.bio && <p className="mt-8 text-small md:text-body">{githubProfile.bio}</p>}

          <div className="mt-8 px-[0.9375rem] md:px-8 py-[1.125rem] grid grid-cols-3 bg-light-bg rounded-[0.625rem]">
            <div className="text-center md:text-left">
              <p id="repos" className="text-tiny md:text-small">
                Repos
              </p>
              <p aria-labelledby="repos" className="text-base md:text-heading-2 font-bold">
                {githubProfile.public_repos}
              </p>
            </div>
            <div className="text-center md:text-left">
              <p id="followers" className="text-tiny md:text-small">
                Followers
              </p>
              <p aria-labelledby="followers" className="text-base md:text-heading-2 font-bold">
                {githubProfile.followers}
              </p>
            </div>
            <div className="text-center md:text-left">
              <p id="following" className="text-tiny md:text-small">
                Following
              </p>
              <p aria-labelledby="following" className="text-base md:text-heading-2 font-bold">
                {githubProfile.following}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 overflow-x-hidden">
            <div
              className={`flex items-center space-x-4 ${
                !githubProfile.location ? 'opacity-50' : ''
              }`}
            >
              <MapMarker className="text-xl" />
              <p className="text-small md:text-body">{githubProfile.location}</p>
            </div>
            <div
              className={`flex items-center space-x-4 ${
                !githubProfile.blog || !githubProfile.html_url ? 'opacity-50' : ''
              }`}
            >
              <Link className="text-xl" />
              <p
                className="text-small md:text-body truncate"
                title={githubProfile.blog || githubProfile.html_url}
              >
                {githubProfile.blog || githubProfile.html_url}
              </p>
            </div>
            <div
              className={`flex items-center space-x-4 ${
                !githubProfile.twitter_username ? 'opacity-50' : ''
              }`}
            >
              <Twitter className="text-xl" />
              <p className="text-small md:text-body">
                {githubProfile.twitter_username || 'Not Available'}
              </p>
            </div>
            <div
              className={`flex items-center space-x-4 ${
                !githubProfile.company ? 'opacity-50' : ''
              }`}
            >
              <MapMarker className="text-xl" />
              <p
                className="text-small md:text-body truncate"
                title={githubProfile.company || 'Not Available'}
              >
                {githubProfile.company || 'Not Available'}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

type GithubUser = {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: true;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
};

export default App;
