# Contributing

Thanks for your interest in contributing to Say No To Gemini!

## Development Setup

1. Clone the repo
2. Load as unpacked extension in `chrome://extensions/`
3. Make your changes
4. Reload the extension to test
5. Use incognito mode to test with clean state

## Testing

### Manual Testing Checklist

- [ ] Toggle extension on/off in popup
- [ ] Perform a Google search with extension enabled
- [ ] Verify `-noai` is appended to query
- [ ] Test on multiple Google domains (.com, .co.uk, etc.)
- [ ] Test with existing `-noai` in query (should not duplicate)
- [ ] Test with special characters and multiple words
- [ ] Test incognito mode

### Automated Testing

Run any linting:

```bash
npm run lint  # if configured
```

## Code Style

- Plain JavaScript (no frameworks)
- Keep it minimal and focused
- Add comments for complex logic
- Use `const` by default, `let` when necessary

## Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit with clear messages
5. Push to your fork
6. Open a Pull Request with description

## Reporting Bugs

Include:

- Chrome version
- Google domain you were using
- Expected vs. actual behavior
- Steps to reproduce
- Screenshot if applicable

## Suggesting Enhancements

- Explain the use case
- Describe the expected behavior
- Provide examples if possible

---

Questions? Open an issue!
