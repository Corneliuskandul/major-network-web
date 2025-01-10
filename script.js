
```
function showPhoneNumber() {
  document.getElementById("phone-number-popup").style.display = "block";
}

function makeCall() {
  window.location.href = "tel:0986103388";
}
```

*JavaScript (in script.js file):*
```
function sendEmail(subject) {
	var email = "corneliuskandulu@gmail.com";
	var body = "I am interested in discussing " + subject;
	var mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
	window.location.href = mailto;
}
```
@Controller
public class ButtonController {
	@RequestMapping("/sendEmail")
	public String sendEmail(@RequestParam("subject") String subject, Model model) {
		String email = "corneliuskandulu@gmail.com";
		String body = "I am interested in discussing " + subject;
		String mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
		model.addAttribute("mailto", mailto);
		return "email";
	}
}
```


