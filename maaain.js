<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-centered">
	    <div class="modal-content">
	    <form>
	    <form id="reg-form">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Register</h5>
	        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
@@ -125,7 +125,7 @@ <h5 class="modal-title" id="exampleModalLabel">Register</h5>
	      </div>
	      <div class="modal-body text-left">

	        	<div class="row">
	        	<div id="reg-form-div" class="row">
    				<div class="col-sm">
			        	<div class="mb-3">
						    <label for="Name" class="form-label">Name</label>
@@ -148,12 +148,20 @@ <h5 class="modal-title" id="exampleModalLabel">Register</h5>
						</div>
					</div>
				</div>

				<div id="thank-you" class="row d-none">
					<div class="col-sm text-center">
						<h3>Thank you for submiting your details</h3>
						<p>You can go ahead and buy tickets now</p>
					</div>
				</div>

	      </div>
	      <div class="modal-footer">
	        <button type="submit" class="btn btn-secondary">Submit</button>
	      <div class="modal-footer justify-content-center">
	        <button id="btn-submit" type="submit" class="btn btn-secondary">Submit</button>
	        <a id="buy-tickets" class="btn btn-secondary text-white d-none" herf="#">Buy Tickets</a>
	      </div>
	    </form>  
	    </form> 
	    </div>
	  </div>
	</div>
@@ -170,28 +178,7 @@ <h5 class="modal-title" id="exampleModalLabel">Register</h5>
			  integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
			  crossorigin="anonymous"></script>

        <script src="js/script.js"></script>

  </body>
</html>

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$( document ).ready(function() {

    $(document).on('change', "#photo" , function(){ 
	    readURL(this);
	});

	$(document).on("submit", "#reg-form",function(e) {

    	e.preventDefault(); 

    	// var form = $(this);
	    // var url = form.attr('action');

	    // $.ajax({
	    //        type: "POST",
	    //        url: url,
	    //        data: form.serialize(), // serializes the form's elements.
	    //        success: function(data)
	    //        {
	    //            alert(data); // show response from the php script.
	    //        }
	    //      });
	    // });

	    $("#reg-form-div").removeClass("d-block").addClass("d-none");
	    $("#btn-submit").removeClass("d-block").addClass("d-none");

	    $("#thank-you").removeClass("d-none").addClass("d-block");
	    $("#buy-tickets").removeClass("d-none").addClass("d-block");

	});

	$('#registerModal').on('hidden.bs.modal', function (e) {

	  	$("#thank-you").removeClass("d-block").addClass("d-none");
	    $("#buy-tickets").removeClass("d-block").addClass("d-none");

	    $("#reg-form-div").removeClass("d-none").addClass("d-block");
	    $("#btn-submit").removeClass("d-none").addClass("d-block");

	    $("#reg-form").trigger("reset");
	    $("#img-preview").attr("src", "images/avatar.png");
	})

});