import { EVENTS } from "./Const";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0;
    const isModifidEvent =
      event.metaKey || event.altKey || event.shiftKey || event.ctrlKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isModifidEvent && !isManageableEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a href={to} target={target} onClick={handleClick} {...props} />;
}
